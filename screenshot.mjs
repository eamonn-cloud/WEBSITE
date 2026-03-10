import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const url    = process.argv[2] || 'http://localhost:3000';
const label  = process.argv[3] || '';
const outDir = path.join(process.cwd(), 'temporary screenshots');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const existing = fs.readdirSync(outDir)
  .filter(f => f.match(/^screenshot-\d+/))
  .map(f => parseInt(f.match(/^screenshot-(\d+)/)?.[1] ?? '0'))
  .sort((a,b) => b - a);

const next = (existing[0] ?? 0) + 1;
const name = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`;
const dest = path.join(outDir, name);

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page    = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await page.screenshot({ path: dest, fullPage: true });
await browser.close();

console.log(`Saved: ${dest}`);
