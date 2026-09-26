import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Size used by Facebook, WhatsApp, LinkedIn, X and Google Discover. */
export const OG_SIZE = { width: 1200, height: 630 };

const font = (pkg: string, file: string) => readFile(join(process.cwd(), "node_modules", "@fontsource", pkg, "files", file));

/**
 * Builds a share image (Open Graph) at build time.
 * kicker = small line above the title, e.g. "Free calculator".
 */
export async function ogImage({ title, kicker, footer = "gadgetcrunchie.com" }: { title: string; kicker: string; footer?: string }) {
  const [display, body, logo] = await Promise.all([
    font("barlow-condensed", "barlow-condensed-latin-700-normal.woff"),
    font("barlow", "barlow-latin-500-normal.woff"),
    readFile(join(process.cwd(), "public", "icon.png")), // your logo (PNG copy made from logo.webp)
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const size = title.length > 48 ? 76 : title.length > 32 ? 88 : 100;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#17212b", color: "#ffffff", padding: "64px 72px", fontFamily: "Barlow" }}>
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={84} height={84} alt="" />
          <div style={{ fontFamily: "Barlow Condensed", fontSize: 44, fontWeight: 700 }}>Gadget Crunchie</div>
        </div>

        {/* Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 34, color: "#f5b800" }}>{kicker}</div>
          <div style={{ fontFamily: "Barlow Condensed", fontWeight: 700, fontSize: size, lineHeight: 1.02, maxWidth: 1000 }}>{title}</div>
        </div>

        {/* Footer: gauge bar + domain */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", width: 520, height: 14, background: "#2c3640", borderRadius: 7 }}>
            <div style={{ width: "58%", height: "100%", background: "#f5b800", borderRadius: 7 }} />
          </div>
          <div style={{ fontSize: 30, color: "#c9d2da" }}>{footer}</div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Barlow Condensed", data: display, weight: 700, style: "normal" },
        { name: "Barlow", data: body, weight: 500, style: "normal" },
      ],
    }
  );
}
