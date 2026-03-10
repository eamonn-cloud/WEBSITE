import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const existing = fs.readdirSync(outDir)
  .filter(f => f.match(/^screenshot-\d+/))
  .map(f => parseInt(f.match(/^screenshot-(\d+)/)?.[1] ?? '0'))
  .sort((a,b) => b-a);
const next = (existing[0] ?? 0) + 1;
const dest = path.join(outDir, `screenshot-${next}-particle-zoom.png`);

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page    = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto('http://localhost:8080', { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1500)); // let particles spawn
await page.screenshot({ path: dest, clip: { x: 680, y: 60, width: 720, height: 700 } });
await browser.close();
console.log('Saved:', dest);
