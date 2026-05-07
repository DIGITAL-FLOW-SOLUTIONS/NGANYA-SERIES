const PURPLE = "#7B2FBE";
const BLUE = "#1A6FE0";
const GOLD = "#F5A623";
const BLACK = "#0A0A0A";
const WHITE = "#FFFFFF";

function CrownNIcon({ size = 48, onDark = true }: { size?: number; onDark?: boolean }) {
  const body = onDark ? PURPLE : PURPLE;
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 100 120" fill="none">
      <path d="M 8 120 L 8 26 L 19 5 L 28 26 L 72 120 L 92 120 L 92 26 L 81 5 L 72 26 L 28 120 Z" fill={body} />
      <path d="M 34 26 L 50 9 L 66 26 Z" fill={body} />
      <path d="M 13 22 L 19 5 L 25 22 Z" fill={GOLD} />
      <path d="M 44 22 L 50 9 L 56 22 Z" fill={GOLD} />
      <path d="M 75 22 L 81 5 L 87 22 Z" fill={GOLD} />
    </svg>
  );
}

function SecDark() {
  return (
    <div style={{ background: BLACK, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 40px", gap: "20px" }}>
      <CrownNIcon size={56} onDark={true} />
      <div style={{ width: "1px", height: "60px", background: "#333" }} />
      <div style={{ fontFamily: "'Anton', sans-serif", lineHeight: 1 }}>
        <div style={{ color: WHITE, fontSize: "2.2rem", letterSpacing: "0.06em" }}>NGANYA</div>
        <div style={{ color: BLUE, fontSize: "1.1rem", letterSpacing: "0.35em", marginTop: "2px" }}>SERIES</div>
      </div>
    </div>
  );
}

function SecLight() {
  return (
    <div style={{ background: WHITE, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 40px", gap: "20px" }}>
      <CrownNIcon size={56} onDark={false} />
      <div style={{ width: "1px", height: "60px", background: "#DDD" }} />
      <div style={{ fontFamily: "'Anton', sans-serif", lineHeight: 1 }}>
        <div style={{ color: BLACK, fontSize: "2.2rem", letterSpacing: "0.06em" }}>NGANYA</div>
        <div style={{ color: BLUE, fontSize: "1.1rem", letterSpacing: "0.35em", marginTop: "2px" }}>SERIES</div>
      </div>
    </div>
  );
}

function SecTagline() {
  return (
    <div style={{ background: BLACK, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 40px", gap: "20px" }}>
      <CrownNIcon size={48} />
      <div style={{ fontFamily: "'Anton', sans-serif", lineHeight: 1 }}>
        <div style={{ color: WHITE, fontSize: "2rem", letterSpacing: "0.06em" }}>NGANYA</div>
        <div style={{ color: BLUE, fontSize: "1rem", letterSpacing: "0.35em", marginTop: "2px" }}>SERIES</div>
        <div style={{ background: GOLD, height: "1.5px", width: "100%", marginTop: "8px" }} />
        <div style={{ color: GOLD, fontSize: "0.38rem", letterSpacing: "0.22em", marginTop: "6px", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
          NO RISK. NO STORY.
        </div>
      </div>
    </div>
  );
}

function SecPurple() {
  return (
    <div style={{ background: PURPLE, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 40px", gap: "20px" }}>
      <svg width={56} height={67} viewBox="0 0 100 120" fill="none">
        <path d="M 8 120 L 8 26 L 19 5 L 28 26 L 72 120 L 92 120 L 92 26 L 81 5 L 72 26 L 28 120 Z" fill="white" />
        <path d="M 34 26 L 50 9 L 66 26 Z" fill="white" />
        <path d="M 13 22 L 19 5 L 25 22 Z" fill={GOLD} />
        <path d="M 44 22 L 50 9 L 56 22 Z" fill={GOLD} />
        <path d="M 75 22 L 81 5 L 87 22 Z" fill={GOLD} />
      </svg>
      <div style={{ width: "1px", height: "60px", background: "rgba(255,255,255,0.3)" }} />
      <div style={{ fontFamily: "'Anton', sans-serif", lineHeight: 1 }}>
        <div style={{ color: WHITE, fontSize: "2.2rem", letterSpacing: "0.06em" }}>NGANYA</div>
        <div style={{ color: GOLD, fontSize: "1.1rem", letterSpacing: "0.35em", marginTop: "2px" }}>SERIES</div>
      </div>
    </div>
  );
}

export default function SecondaryLogo() {
  return (
    <div style={{ background: "#111", minHeight: "100vh", padding: "40px 20px", fontFamily: "'Inter', sans-serif" }}>
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <div style={{ color: GOLD, fontSize: "0.65rem", letterSpacing: "0.4em", marginBottom: "6px", fontWeight: 600 }}>
          NGANYA SERIES — BRAND IDENTITY
        </div>
        <div style={{ color: WHITE, fontSize: "1.4rem", letterSpacing: "0.1em", fontFamily: "'Anton', sans-serif" }}>
          02. SECONDARY LOGO
        </div>
        <div style={{ color: "#555", fontSize: "0.65rem", letterSpacing: "0.15em", marginTop: "6px" }}>
          FOR EMAIL SIGNATURES · MOBILE HEADERS · SMALLER PLACEMENTS
        </div>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <div>
          <div style={{ border: "1px solid #222", overflow: "hidden", height: "140px" }}><SecDark /></div>
          <div style={{ color: "#444", fontSize: "0.6rem", letterSpacing: "0.2em", marginTop: "8px", textAlign: "center" }}>DARK — PRIMARY</div>
        </div>
        <div>
          <div style={{ border: "1px solid #444", overflow: "hidden", height: "140px" }}><SecLight /></div>
          <div style={{ color: "#444", fontSize: "0.6rem", letterSpacing: "0.2em", marginTop: "8px", textAlign: "center" }}>LIGHT — REVERSED</div>
        </div>
        <div>
          <div style={{ border: "1px solid #222", overflow: "hidden", height: "140px" }}><SecTagline /></div>
          <div style={{ color: "#444", fontSize: "0.6rem", letterSpacing: "0.2em", marginTop: "8px", textAlign: "center" }}>WITH TAGLINE</div>
        </div>
        <div>
          <div style={{ border: "1px solid #333", overflow: "hidden", height: "140px" }}><SecPurple /></div>
          <div style={{ color: "#444", fontSize: "0.6rem", letterSpacing: "0.2em", marginTop: "8px", textAlign: "center" }}>COLOUR — BRANDED</div>
        </div>
      </div>

      {/* Size demos */}
      <div style={{ maxWidth: "900px", margin: "24px auto 0", borderTop: "1px solid #1A1A1A", paddingTop: "20px" }}>
        <div style={{ color: "#333", fontSize: "0.55rem", letterSpacing: "0.3em", marginBottom: "16px" }}>SCALE BEHAVIOUR</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {[56, 40, 28, 20].map((size) => (
            <div key={size} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <CrownNIcon size={size} />
              <div style={{ width: "1px", height: size * 1.2 * 0.6, background: "#222" }} />
              <div style={{ fontFamily: "'Anton', sans-serif" }}>
                <div style={{ color: WHITE, fontSize: `${size * 0.42}px`, letterSpacing: "0.06em", lineHeight: 1 }}>NGANYA</div>
                <div style={{ color: BLUE, fontSize: `${size * 0.21}px`, letterSpacing: "0.35em", lineHeight: 1, marginTop: "2px" }}>SERIES</div>
              </div>
              <div style={{ color: "#333", fontSize: "0.5rem", letterSpacing: "0.2em", marginLeft: "auto" }}>{size}px ICON</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
