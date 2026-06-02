import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, "..", "public", "portfolio");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".jpg"));

for (const file of files) {
  const input = path.join(dir, file);
  const output = path.join(dir, file.replace(".jpg", ".webp"));
  await sharp(input).webp({ quality: 80 }).toFile(output);
  console.log(`OK: ${file} -> ${file.replace(".jpg", ".webp")}`);
}

console.log("Done!");
