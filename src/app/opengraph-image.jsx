import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "digi1Xprt — IT, Financial & Share Market Solutions. Do Big...";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public", "logo-light.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "linear-gradient(135deg, #0B0039 0%, #150646 60%, #2f1b6e 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <img src={logoSrc} width={330} height={177} alt="" />
          <div
            style={{
              display: "flex",
              padding: "12px 28px",
              borderRadius: 999,
              border: "2px solid rgba(255,153,8,0.6)",
              color: "#FF9908",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            IT • FINANCE • SHARE MARKET
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1 }}>Technology & Wealth,</div>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 800, lineHeight: 1.1 }}>
            Engineered to&nbsp;<span style={{ color: "#FF9908" }}>Do Big.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "rgba(255,255,255,0.7)" }}>
            Delhi • Kurukshetra • Serving clients across India
          </div>
        </div>
      </div>
    ),
    size
  );
}
