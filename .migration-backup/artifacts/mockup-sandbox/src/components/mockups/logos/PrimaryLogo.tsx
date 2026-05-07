const PURPLE = "#7B2FBE";
const BLUE = "#1A6FE0";
const GOLD = "#F5A623";
const BLACK = "#0A0A0A";
const WHITE = "#FFFFFF";

function CrownNIcon({ size = 80, dark = true }: { size?: number; dark?: boolean }) {
  const fill = dark ? PURPLE : PURPLE;
  const goldTip = GOLD;
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main N shape with integrated crown spikes */}
      <path
        d="M 8 120 L 8 26 L 19 5 L 28 26 L 72 120 L 92 120 L 92 26 L 81 5 L 72 26 L 28 120 Z"
        fill={fill}
      />
      {/* Center crown spike overlay */}
      <path
        d="M 34 26 L 50 9 L 66 26 Z"
        fill={fill}
      />
      {/* Gold crown tip - left */}
      <path
        d="M 13 22 L 19 5 L 25 22 Z"
        fill={goldTip}
      />
      {/* Gold crown tip - center */}
      <path
        d="M 44 22 L 50 9 L 56 22 Z"
        fill={goldTip}
      />
      {/* Gold crown tip - right */}
      <path
        d="M 75 22 L 81 5 L 87 22 Z"
        fill={goldTip}
      />
    </svg>
  );
}

function PrimaryLogoDark() {
  return (
    <div
      style={{ background: BLACK, fontFamily: "'Anton', sans-serif" }}
      className="flex flex-col items-center justify-center p-12 h-full"
    >
      <CrownNIcon size={100} dark={true} />
      <div className="mt-6 text-center leading-none">
        <div
          style={{
            color: WHITE,
            fontSize: "3.8rem",
            letterSpacing: "0.08em",
            lineHeight: 1,
            fontFamily: "'Anton', sans-serif",
          }}
        >
          NGANYA
        </div>
        <div
          style={{
            color: BLUE,
            fontSize: "2rem",
            letterSpacing: "0.35em",
            lineHeight: 1,
            marginTop: "4px",
            fontFamily: "'Anton', sans-serif",
          }}
        >
          SERIES
        </div>
      </div>
      <div
        style={{ background: GOLD, height: "2px", width: "140px", marginTop: "20px" }}
      />
      <div
        style={{
          color: GOLD,
          fontSize: "0.55rem",
          letterSpacing: "0.25em",
          marginTop: "12px",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        OUR CULTURE • OUR STORIES • OUR LEGACY
      </div>
      <div
        style={{
          color: "#555",
          fontSize: "0.45rem",
          letterSpacing: "0.2em",
          marginTop: "6px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        EST 2026
      </div>
    </div>
  );
}

function PrimaryLogoLight() {
  return (
    <div
      style={{ background: WHITE, fontFamily: "'Anton', sans-serif" }}
      className="flex flex-col items-center justify-center p-12 h-full"
    >
      <CrownNIcon size={100} dark={false} />
      <div className="mt-6 text-center leading-none">
        <div
          style={{
            color: BLACK,
            fontSize: "3.8rem",
            letterSpacing: "0.08em",
            lineHeight: 1,
            fontFamily: "'Anton', sans-serif",
          }}
        >
          NGANYA
        </div>
        <div
          style={{
            color: BLUE,
            fontSize: "2rem",
            letterSpacing: "0.35em",
            lineHeight: 1,
            marginTop: "4px",
            fontFamily: "'Anton', sans-serif",
          }}
        >
          SERIES
        </div>
      </div>
      <div
        style={{ background: GOLD, height: "2px", width: "140px", marginTop: "20px" }}
      />
      <div
        style={{
          color: BLACK,
          fontSize: "0.55rem",
          letterSpacing: "0.25em",
          marginTop: "12px",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        OUR CULTURE • OUR STORIES • OUR LEGACY
      </div>
      <div
        style={{
          color: "#888",
          fontSize: "0.45rem",
          letterSpacing: "0.2em",
          marginTop: "6px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        EST 2026
      </div>
    </div>
  );
}

function PrimaryLogoColour() {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${PURPLE} 0%, #4A1A8A 50%, #1A3A8F 100%)`,
        fontFamily: "'Anton', sans-serif",
      }}
      className="flex flex-col items-center justify-center p-12 h-full"
    >
      <svg width={100} height={120} viewBox="0 0 100 120" fill="none">
        <path d="M 8 120 L 8 26 L 19 5 L 28 26 L 72 120 L 92 120 L 92 26 L 81 5 L 72 26 L 28 120 Z" fill="white" />
        <path d="M 34 26 L 50 9 L 66 26 Z" fill="white" />
        <path d="M 13 22 L 19 5 L 25 22 Z" fill={GOLD} />
        <path d="M 44 22 L 50 9 L 56 22 Z" fill={GOLD} />
        <path d="M 75 22 L 81 5 L 87 22 Z" fill={GOLD} />
      </svg>
      <div className="mt-6 text-center leading-none">
        <div style={{ color: WHITE, fontSize: "3.8rem", letterSpacing: "0.08em", lineHeight: 1, fontFamily: "'Anton', sans-serif" }}>
          NGANYA
        </div>
        <div style={{ color: GOLD, fontSize: "2rem", letterSpacing: "0.35em", lineHeight: 1, marginTop: "4px", fontFamily: "'Anton', sans-serif" }}>
          SERIES
        </div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.3)", height: "1px", width: "140px", marginTop: "20px" }} />
      <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.55rem", letterSpacing: "0.25em", marginTop: "12px", fontFamily: "'Inter', sans-serif", fontWeight: 600, textAlign: "center" }}>
        OUR CULTURE • OUR STORIES • OUR LEGACY
      </div>
    </div>
  );
}

export default function PrimaryLogo() {
  return (
    <div style={{ background: "#111", minHeight: "100vh", padding: "40px 20px", fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <div style={{ color: GOLD, fontSize: "0.65rem", letterSpacing: "0.4em", marginBottom: "6px", fontWeight: 600 }}>
          NGANYA SERIES — BRAND IDENTITY
        </div>
        <div style={{ color: WHITE, fontSize: "1.4rem", letterSpacing: "0.1em", fontFamily: "'Anton', sans-serif" }}>
          01. PRIMARY LOGO
        </div>
        <div style={{ color: "#555", fontSize: "0.65rem", letterSpacing: "0.15em", marginTop: "6px" }}>
          FOR WEBSITE HEADERS · BUSINESS CARDS · LARGE COLLATERAL
        </div>
      </div>

      {/* Three variations side by side */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", maxWidth: "900px", margin: "0 auto" }}>
        {/* Dark */}
        <div>
          <div style={{ border: "1px solid #222", overflow: "hidden", height: "340px" }}>
            <PrimaryLogoDark />
          </div>
          <div style={{ color: "#444", fontSize: "0.6rem", letterSpacing: "0.2em", marginTop: "8px", textAlign: "center" }}>
            DARK — PRIMARY
          </div>
        </div>

        {/* Colour */}
        <div>
          <div style={{ border: "1px solid #333", overflow: "hidden", height: "340px" }}>
            <PrimaryLogoColour />
          </div>
          <div style={{ color: "#444", fontSize: "0.6rem", letterSpacing: "0.2em", marginTop: "8px", textAlign: "center" }}>
            COLOUR — BRANDED
          </div>
        </div>

        {/* Light */}
        <div>
          <div style={{ border: "1px solid #444", overflow: "hidden", height: "340px" }}>
            <PrimaryLogoLight />
          </div>
          <div style={{ color: "#444", fontSize: "0.6rem", letterSpacing: "0.2em", marginTop: "8px", textAlign: "center" }}>
            LIGHT — REVERSED
          </div>
        </div>
      </div>

      {/* Spec row */}
      <div style={{ maxWidth: "900px", margin: "24px auto 0", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "12px" }}>
        {[
          { label: "PRIMARY", value: "#7B2FBE" },
          { label: "SECONDARY", value: "#1A6FE0" },
          { label: "ACCENT", value: "#F5A623" },
          { label: "BASE", value: "#0A0A0A" },
        ].map(({ label, value }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "18px", height: "18px", background: value, flexShrink: 0 }} />
            <div>
              <div style={{ color: "#666", fontSize: "0.5rem", letterSpacing: "0.2em" }}>{label}</div>
              <div style={{ color: "#888", fontSize: "0.55rem", letterSpacing: "0.05em" }}>{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
