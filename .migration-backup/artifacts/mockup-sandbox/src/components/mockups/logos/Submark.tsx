const PURPLE = "#7B2FBE";
const BLUE = "#1A6FE0";
const GOLD = "#F5A623";
const BLACK = "#0A0A0A";
const WHITE = "#FFFFFF";

function CrownNSvg({ bodyColor = PURPLE, goldColor = GOLD }: { bodyColor?: string; goldColor?: string }) {
  return (
    <>
      <path d="M 8 120 L 8 26 L 19 5 L 28 26 L 72 120 L 92 120 L 92 26 L 81 5 L 72 26 L 28 120 Z" fill={bodyColor} />
      <path d="M 34 26 L 50 9 L 66 26 Z" fill={bodyColor} />
      <path d="M 13 22 L 19 5 L 25 22 Z" fill={goldColor} />
      <path d="M 44 22 L 50 9 L 56 22 Z" fill={goldColor} />
      <path d="M 75 22 L 81 5 L 87 22 Z" fill={goldColor} />
    </>
  );
}

function SubmarkVariant({
  bg, iconBg, bodyColor = PURPLE, goldColor = GOLD, shape = "square", label
}: {
  bg: string; iconBg?: string; bodyColor?: string; goldColor?: string; shape?: "square" | "circle" | "none"; label: string;
}) {
  const containerStyle: React.CSSProperties = {
    width: "100px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: iconBg ?? bg,
    borderRadius: shape === "circle" ? "50%" : shape === "square" ? "0" : "0",
    flexShrink: 0,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      <div style={containerStyle}>
        <svg width="56" height="67" viewBox="0 0 100 120" fill="none">
          <CrownNSvg bodyColor={bodyColor} goldColor={goldColor} />
        </svg>
      </div>
      <div style={{ color: "#444", fontSize: "0.5rem", letterSpacing: "0.2em", textAlign: "center" }}>{label}</div>
    </div>
  );
}

export default function Submark() {
  return (
    <div style={{ background: "#111", minHeight: "100vh", padding: "40px 20px", fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <div style={{ color: GOLD, fontSize: "0.65rem", letterSpacing: "0.4em", marginBottom: "6px", fontWeight: 600 }}>
          NGANYA SERIES — BRAND IDENTITY
        </div>
        <div style={{ color: WHITE, fontSize: "1.4rem", letterSpacing: "0.1em", fontFamily: "'Anton', sans-serif" }}>
          03. SUBMARK / FAVICON
        </div>
        <div style={{ color: "#555", fontSize: "0.65rem", letterSpacing: "0.15em", marginTop: "6px" }}>
          FOR SOCIAL MEDIA · FAVICONS · WATERMARKS · APP ICONS
        </div>
      </div>

      {/* Main hero icon - large */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <div style={{ background: BLACK, padding: "32px", border: `2px solid ${PURPLE}` }}>
            <svg width="120" height="144" viewBox="0 0 100 120" fill="none">
              <CrownNSvg />
            </svg>
          </div>
          <div style={{ color: "#444", fontSize: "0.6rem", letterSpacing: "0.25em" }}>THE CROWN N — MASTER ICON</div>
        </div>
      </div>

      {/* Variants grid */}
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        <div style={{ color: "#333", fontSize: "0.55rem", letterSpacing: "0.3em", marginBottom: "16px" }}>
          USAGE CONTEXTS
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
          <SubmarkVariant bg={BLACK} iconBg={BLACK} label="DARK BG" />
          <SubmarkVariant bg={WHITE} iconBg={WHITE} label="LIGHT BG" />
          <SubmarkVariant bg={PURPLE} iconBg={PURPLE} bodyColor={WHITE} goldColor={GOLD} label="PURPLE BG" />
          <SubmarkVariant bg={BLUE} iconBg={BLUE} bodyColor={WHITE} goldColor={GOLD} label="BLUE BG" />
          <SubmarkVariant bg={GOLD} iconBg={GOLD} bodyColor={BLACK} goldColor={PURPLE} label="GOLD BG" />
          <SubmarkVariant bg="#1A1A1A" iconBg={PURPLE} bodyColor={WHITE} goldColor={GOLD} shape="circle" label="CIRCLE BADGE" />
          <SubmarkVariant bg="#1A1A1A" iconBg={BLUE} bodyColor={WHITE} goldColor={GOLD} shape="circle" label="BLUE CIRCLE" />
        </div>

        {/* Size scale */}
        <div style={{ marginTop: "32px", borderTop: "1px solid #1A1A1A", paddingTop: "20px" }}>
          <div style={{ color: "#333", fontSize: "0.55rem", letterSpacing: "0.3em", marginBottom: "16px" }}>
            SIZE SCALE — FAVICON BEHAVIOUR
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "20px" }}>
            {[96, 64, 48, 32, 24, 16].map((sz) => (
              <div key={sz} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                <svg width={sz} height={sz * 1.2} viewBox="0 0 100 120" fill="none">
                  <CrownNSvg />
                </svg>
                <div style={{ color: "#444", fontSize: "0.45rem", letterSpacing: "0.1em" }}>{sz}px</div>
              </div>
            ))}
          </div>
        </div>

        {/* Monochrome */}
        <div style={{ marginTop: "28px", borderTop: "1px solid #1A1A1A", paddingTop: "20px" }}>
          <div style={{ color: "#333", fontSize: "0.55rem", letterSpacing: "0.3em", marginBottom: "16px" }}>
            MONO / SINGLE COLOUR
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ background: BLACK, padding: "16px" }}>
                <svg width="60" height="72" viewBox="0 0 100 120" fill="none">
                  <CrownNSvg bodyColor={WHITE} goldColor={WHITE} />
                </svg>
              </div>
              <div style={{ color: "#444", fontSize: "0.5rem", letterSpacing: "0.2em" }}>WHITE MONO</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ background: WHITE, padding: "16px" }}>
                <svg width="60" height="72" viewBox="0 0 100 120" fill="none">
                  <CrownNSvg bodyColor={BLACK} goldColor={BLACK} />
                </svg>
              </div>
              <div style={{ color: "#444", fontSize: "0.5rem", letterSpacing: "0.2em" }}>BLACK MONO</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ background: BLACK, padding: "16px" }}>
                <svg width="60" height="72" viewBox="0 0 100 120" fill="none">
                  <CrownNSvg bodyColor={PURPLE} goldColor={PURPLE} />
                </svg>
              </div>
              <div style={{ color: "#444", fontSize: "0.5rem", letterSpacing: "0.2em" }}>PURPLE MONO</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ background: BLACK, padding: "16px" }}>
                <svg width="60" height="72" viewBox="0 0 100 120" fill="none">
                  <CrownNSvg bodyColor={GOLD} goldColor={GOLD} />
                </svg>
              </div>
              <div style={{ color: "#444", fontSize: "0.5rem", letterSpacing: "0.2em" }}>GOLD MONO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
