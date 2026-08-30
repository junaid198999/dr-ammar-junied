import { ImageResponse } from "next/og";

export const alt = "Dr. Ammar Junied — Orthodontist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#F7F4EE",
        color: "#10222F",
        alignItems: "center",
        padding: "70px 90px",
      }}
    >
      <div style={{ width: 390, height: 390, display: "flex", position: "relative", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "serif", fontSize: 260, letterSpacing: -42 }}>AJ</span>
        <span style={{ position: "absolute", width: 320, height: 5, background: "#B99A52", borderRadius: 10, transform: "rotate(-6deg)" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginLeft: 72 }}>
        <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: 8 }}>DR. AMMAR</span>
        <span style={{ fontFamily: "serif", fontSize: 108, marginTop: 8 }}>JUNIED</span>
        <span style={{ width: 560, height: 3, background: "#B99A52", marginTop: 10 }} />
        <span style={{ fontSize: 24, letterSpacing: 12, marginTop: 28 }}>ORTHODONTIST · MADINAH</span>
      </div>
    </div>,
    size,
  );
}
