import { chromium } from "playwright";
import fs from "fs";

const BASE = "http://localhost:3000";
const PAGES = [
  "/",
  "/services/tyre-repair",
  "/services/tyre-replacement",
  "/services/buy-new-tyre",
  "/services/air-fill",
  "/services/spare-tyre-change",
  "/services/fix-puncture-tyre",
  "/services/flat-tyre-replacement",
  "/services/roadside-assistance",
  "/services/car-towing-recovery",
  "/services/car-recovery-dubai",
];
const VIEWPORTS = [
  { name: "iphone-se", width: 375, height: 667 },
  { name: "iphone-12", width: 390, height: 844 },
];

const outDir = "C:/Users/DARLAP~1/AppData/Local/Temp/claude/C--wisevision-fix-my-tyre-com/3a9c4585-cb65-468e-b8d1-11411a2a4e45/scratchpad/mobile-audit";
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const results = [];

for (const vp of VIEWPORTS) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, isMobile: true, hasTouch: true });
  const page = await context.newPage();

  for (const path of PAGES) {
    try {
      await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 20000 });
      await page.waitForTimeout(300);

      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.clientWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const offenders = [];
        if (scrollWidth > docWidth + 2) {
          document.querySelectorAll("body *").forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.right > docWidth + 2 && rect.width > 0) {
              offenders.push({
                tag: el.tagName,
                class: (el.className || "").toString().slice(0, 120),
                text: (el.textContent || "").trim().slice(0, 60),
                right: Math.round(rect.right),
                width: Math.round(rect.width),
              });
            }
          });
        }
        return { docWidth, scrollWidth, hasOverflow: scrollWidth > docWidth + 2, offenders: offenders.slice(0, 8) };
      });

      const fileSafe = path === "/" ? "home" : path.replace(/\//g, "_");
      const screenshotPath = `${outDir}/${vp.name}${fileSafe}.png`;
      await page.screenshot({ path: screenshotPath, fullPage: true });

      results.push({ path, viewport: vp.name, ...overflow, screenshot: screenshotPath });
      console.log(`[${vp.name}] ${path} — overflow: ${overflow.hasOverflow} (doc:${overflow.docWidth} scroll:${overflow.scrollWidth})`);
    } catch (err) {
      results.push({ path, viewport: vp.name, error: String(err) });
      console.log(`[${vp.name}] ${path} — ERROR: ${err}`);
    }
  }

  await context.close();
}

// Hamburger menu behavior check (mobile)
{
  const context = await browser.newContext({ viewport: { width: 375, height: 667 }, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.click("#navbarToggler");
  await page.waitForTimeout(300);
  const openAfterClick = await page.evaluate(() => !document.getElementById("navbarCollapse").className.includes("invisible"));
  // click outside
  await page.mouse.click(10, 10);
  await page.waitForTimeout(300);
  const closedAfterOutsideClick = await page.evaluate(() => document.getElementById("navbarCollapse").className.includes("invisible"));
  // open then click toggler (X) again
  await page.click("#navbarToggler");
  await page.waitForTimeout(300);
  await page.click("#navbarToggler");
  await page.waitForTimeout(300);
  const closedAfterXClick = await page.evaluate(() => document.getElementById("navbarCollapse").className.includes("invisible"));
  results.push({ test: "hamburger-menu", openAfterClick, closedAfterOutsideClick, closedAfterXClick });
  console.log("Hamburger:", { openAfterClick, closedAfterOutsideClick, closedAfterXClick });
  await context.close();
}

await browser.close();
fs.writeFileSync(`${outDir}/results.json`, JSON.stringify(results, null, 2));
console.log("\nDone. Results written to", `${outDir}/results.json`);
