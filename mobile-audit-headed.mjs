import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const PAGES = ["/", "/services/tyre-repair", "/services/tyre-replacement"];

const browser = await chromium.launch({ headless: false, slowMo: 400 });
const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
const page = await context.newPage();

for (const path of PAGES) {
  console.log("Visiting", path);
  await page.goto(BASE + path, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
}

console.log("Opening hamburger menu...");
await page.goto(BASE + "/", { waitUntil: "networkidle" });
await page.click("#navbarToggler");
await page.waitForTimeout(1500);
console.log("Clicking outside to close...");
await page.mouse.click(20, 20);
await page.waitForTimeout(1500);

console.log("Demo done — browser window left open for you to inspect. Close it manually when done.");
