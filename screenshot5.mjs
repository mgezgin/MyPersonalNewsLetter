import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });

await page.goto('http://localhost:3001/newsletters', { waitUntil: 'domcontentloaded' });
await page.waitForSelector('h1', { timeout: 10000 });
await page.waitForTimeout(800);
await page.screenshot({ path: 'C:\\tmp\\nl-list.png', fullPage: true });

await page.goto('http://localhost:3001/newsletters/getting-started-with-nextjs-15', { waitUntil: 'domcontentloaded' });
await page.waitForSelector('h1', { timeout: 10000 });
await page.waitForTimeout(800);
await page.screenshot({ path: 'C:\\tmp\\nl-post.png', fullPage: true });

await browser.close();
console.log('done');
