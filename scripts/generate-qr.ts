import fs from "fs";
import path from "path";
import QRCode from "qrcode";

/**
 * QR Code Generator for Digital Exit (§4.5)
 * Generates print-resolution SVG and PNG targeting <PRODUCTION_URL>/digital-exit.
 * Fails loudly if the base URL environment variable is unset.
 */
async function generateQRCodes() {
  const baseUrl = process.env.PRODUCTION_URL || process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl || baseUrl.trim() === "") {
    console.error("==================================================================");
    console.error("FATAL ERROR: PRODUCTION_URL environment variable is not defined!");
    console.error("To generate print-resolution QR codes, specify PRODUCTION_URL:");
    console.error("e.g. PRODUCTION_URL=https://unhackablehumans.org npm run generate-qr");
    console.error("==================================================================");
    process.exit(1);
  }

  // Normalize base URL and construct the stable QR target URL
  const normalizedBase = baseUrl.trim().replace(/\/+$/, "");
  const targetUrl = `${normalizedBase}/digital-exit`;

  const publicDir = path.resolve(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const svgPath = path.join(publicDir, "qr-digital-exit.svg");
  const pngPath = path.join(publicDir, "qr-digital-exit.png");

  console.log(`Generating print-ready QR codes for target: ${targetUrl}`);

  // High-contrast, brand colors: navy modules (#12263A) on offwhite background (#F7F8F6)
  const qrOptions = {
    errorCorrectionLevel: "H" as const, // High error correction for robust physical scanning
    color: {
      dark: "#12263A",
      light: "#F7F8F6",
    },
    margin: 2,
  };

  // Generate SVG (vector, infinitely scalable)
  const svgString = await QRCode.toString(targetUrl, {
    ...qrOptions,
    type: "svg",
  });
  fs.writeFileSync(svgPath, svgString, "utf8");
  console.log(`✓ Vector SVG QR code saved to: ${svgPath}`);

  // Generate 2048x2048 PNG (print resolution at 300+ DPI)
  await QRCode.toFile(pngPath, targetUrl, {
    ...qrOptions,
    width: 2048,
  });
  console.log(`✓ High-resolution PNG QR code (2048px) saved to: ${pngPath}`);
}

generateQRCodes().catch((err) => {
  console.error("Failed to generate QR codes:", err);
  process.exit(1);
});
