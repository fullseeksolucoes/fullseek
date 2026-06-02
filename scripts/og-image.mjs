import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const logoPath = path.join(root, "public", "logo.webp");
const outPath = path.join(root, "public", "og-image.jpg");

const W = 1200;
const H = 630;

// Gradient background with SVG overlay
const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7a0ab0" />
      <stop offset="50%" style="stop-color:#9c0dd9" />
      <stop offset="100%" style="stop-color:#6f00a8" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="60%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.06" />
      <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0" />
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)" />
  <rect width="${W}" height="${H}" fill="url(#glow)" />
  <!-- Subtle grid pattern -->
  <g stroke="rgba(255,255,255,0.03)" stroke-width="1">
    ${Array.from({ length: 20 }, (_, i) => `<line x1="${i * (W / 20)}" y1="0" x2="${i * (W / 20)}" y2="${H}" />`).join("\n    ")}
    ${Array.from({ length: 12 }, (_, i) => `<line x1="0" y1="${i * (H / 12)}" x2="${W}" y2="${i * (H / 12)}" />`).join("\n    ")}
  </g>
</svg>
`;

const logoBuffer = await sharp(logoPath)
  .resize({ width: 560, withoutEnlargement: true })
  .toBuffer();

const compositeImg = await sharp(Buffer.from(svg))
  .composite([{ input: logoBuffer, gravity: "center" }])
  .webp({ quality: 90 })
  .toBuffer();

await sharp(compositeImg)
  .jpeg({ quality: 95 })
  .toFile(outPath);

console.log("OK: og-image.jpg created");
