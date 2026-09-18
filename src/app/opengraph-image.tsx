import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = siteConfig.socialImageAlt;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#f7f6f2",
        color: "#181817",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px 84px",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#3157d5",
          display: "flex",
          height: "12px",
          width: "120px",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: "68px",
            fontWeight: 700,
            letterSpacing: "-2px",
            lineHeight: 1.08,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            color: "#3157d5",
            fontSize: "36px",
            fontWeight: 600,
            marginTop: "26px",
          }}
        >
          {siteConfig.professionalTitle}
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          borderTop: "2px solid #deddd7",
          color: "#53534f",
          display: "flex",
          fontSize: "24px",
          justifyContent: "space-between",
          paddingTop: "28px",
        }}
      >
        <span>Kingston, Ontario</span>
        <span>Frontend · Backend · Product delivery</span>
      </div>
    </div>,
    size,
  );
}
