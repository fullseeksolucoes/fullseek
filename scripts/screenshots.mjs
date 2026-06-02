import { chromium } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "..", "public", "portfolio");

const sites = [
  { url: "https://www.apexmidias.com.br", name: "apexmidias" },
  { url: "https://www.ntpasseiosnauticos.com.br", name: "ntpasseiosnauticos" },
  { url: "https://www.neryassessoria.com.br", name: "neryassessoria" },
  { url: "https://www.beltrack.com.br", name: "beltrack" },
  { url: "https://www.mdtransfersos.com.br", name: "mdtransfersos" },
  { url: "https://www.ssretifica.com.br", name: "ssretifica" },
];

const browser = await chromium.launch({ headless: true });

for (const site of sites) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  try {
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: path.join(outDir, `${site.name}.jpg`),
      type: "jpeg",
      quality: 85,
      fullPage: false,
    });
    console.log(`OK: ${site.name}`);
  } catch (err) {
    console.error(`FAIL: ${site.name} - ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("Done!");
