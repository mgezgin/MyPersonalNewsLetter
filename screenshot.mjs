import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });

await page.goto('http://localhost:3001');
await page.waitForLoadState('networkidle');
await page.screenshot({ path: 'C:\\tmp\\home.png', fullPage: true });

await page.goto('http://localhost:3001/blog');
await page.waitForLoadState('networkidle');
await page.screenshot({ path: 'C:\\tmp\\blog.png', fullPage: true });

await page.goto('http://localhost:3001/login');
await page.waitForLoadState('networkidle');
await page.screenshot({ path: 'C:\\tmp\\login.png', fullPage: true });

await page.goto('http://localhost:3001/newsletters');
await page.waitForLoadState('networkidle');
await page.screenshot({ path: 'C:\\tmp\\newsletters.png', fullPage: true });

await browser.close();
console.log('Screenshots saved to C:\\tmp\\');
