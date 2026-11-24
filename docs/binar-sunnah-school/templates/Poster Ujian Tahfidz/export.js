// Ekspor poster ke PNG 1080×1350.
// Pakai: node export.js [output.png]
// Butuh Playwright (npm i -D playwright && npx playwright install chromium).
const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const out = process.argv[2] || 'poster.png';
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 1450 } });
  await page.goto('file://' + path.join(__dirname, 'Poster Ujian Tahfidz.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);
  await (await page.$('#poster')).screenshot({ path: out });
  await browser.close();
  console.log('Tersimpan:', out);
})();
