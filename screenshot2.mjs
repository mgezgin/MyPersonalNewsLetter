import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });

// Blog post
await page.goto('http://localhost:3001/blog/getting-started-with-nextjs-15');
await page.waitForLoadState('networkidle');
await page.screenshot({ path: 'C:\\tmp\\blogpost.png', fullPage: true });

// Admin login then dashboard
await page.goto('http://localhost:3001/login');
await page.waitForLoadState('networkidle');
await page.fill('input[type="email"]', 'admin@example.com');
await page.fill('input[type="password"]', 'admin123');
await page.click('button[type="submit"]');
await page.waitForURL('**/admin');
await page.waitForLoadState('networkidle');
await page.screenshot({ path: 'C:\\tmp\\admin.png', fullPage: true });

await page.goto('http://localhost:3001/admin/blogs');
await page.waitForLoadState('networkidle');
await page.screenshot({ path: 'C:\\tmp\\admin-blogs.png', fullPage: true });

await browser.close();
console.log('done');
