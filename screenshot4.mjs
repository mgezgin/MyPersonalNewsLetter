import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });

await page.goto('http://localhost:3001/newsletters');
await page.waitForSelector('h1', { timeout: 10000 });
await page.waitForTimeout(500);
await page.screenshot({ path: 'C:\\tmp\\newsletters2.png', fullPage: true });

await page.goto('http://localhost:3001');
await page.waitForSelector('h1', { timeout: 10000 });
await page.waitForTimeout(500);
await page.screenshot({ path: 'C:\\tmp\\home3.png', fullPage: true });

await browser.close();
console.log('done');
