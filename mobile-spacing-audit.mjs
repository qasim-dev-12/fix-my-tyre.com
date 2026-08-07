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
const VIEWPORT = { width: 320, height: 568 };

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: VIEWPORT, isMobile: true, hasTouch: true });
const page = await context.newPage();

const allFindings = [];

for (const path of PAGES) {
  await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 20000 });
  await page.waitForTimeout(200);

  const findings = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const results = { edgeTouch: [], sectionOverlap: [] };

    // 1. Text elements touching viewport edge (no horizontal padding)
    const textTags = ["H1", "H2", "H3", "H4", "P", "SPAN", "A", "BUTTON", "LI"];
    document.querySelectorAll("body *").forEach((el) => {
      if (!textTags.includes(el.tagName)) return;
      const hasOwnText = Array.from(el.childNodes).some((n) => n.nodeType === 3 && n.textContent.trim().length > 0);
      if (!hasOwnText) return;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      if (rect.top > 900 || rect.bottom < 0) return; // skip far off-screen (sticky bars etc handled separately)
      const style = getComputedStyle(el);
      if (style.position === "fixed") return;
      if (rect.left < 4 || vw - rect.right < 4) {
        results.edgeTouch.push({
          tag: el.tagName,
          class: (el.className || "").toString().slice(0, 100),
          text: el.textContent.trim().slice(0, 50),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          top: Math.round(rect.top + window.scrollY),
        });
      }
    });

    // 2. Overlapping sections (negative gap = margin/padding collapse bug)
    const sections = Array.from(document.querySelectorAll("section"));
    for (let i = 0; i < sections.length - 1; i++) {
      const a = sections[i].getBoundingClientRect();
      const b = sections[i + 1].getBoundingClientRect();
      const gap = b.top - a.bottom;
      if (gap < -2) {
        results.sectionOverlap.push({
          index: i,
          gap: Math.round(gap),
          aClass: (sections[i].className || "").toString().slice(0, 80),
          bClass: (sections[i + 1].className || "").toString().slice(0, 80),
        });
      }
    }

    return results;
  });

  if (findings.edgeTouch.length || findings.sectionOverlap.length) {
    allFindings.push({ path, ...findings });
    console.log(`\n=== ${path} ===`);
    if (findings.edgeTouch.length) {
      console.log("Edge-touching text elements:");
      findings.edgeTouch.slice(0, 10).forEach((f) => console.log("  ", f));
    }
    if (findings.sectionOverlap.length) {
      console.log("Overlapping sections:");
      findings.sectionOverlap.forEach((f) => console.log("  ", f));
    }
  } else {
    console.log(`${path} — clean`);
  }
}

await browser.close();

const outDir = "C:/Users/DARLAP~1/AppData/Local/Temp/claude/C--wisevision-fix-my-tyre-com/3a9c4585-cb65-468e-b8d1-11411a2a4e45/scratchpad/mobile-audit";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/spacing-results.json`, JSON.stringify(allFindings, null, 2));
console.log("\nWritten to spacing-results.json");
