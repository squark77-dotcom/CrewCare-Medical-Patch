const base = import.meta.env.BASE_URL;

export default function Slide1Title() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{
        backgroundColor: "#1A1B26",
        fontFamily: "'Inter', sans-serif",
        color: "#C0CAF5",
      }}
    >
      {/* Background image — subtle atmospheric layer */}
      <img
        src={`${base}title-bg.jpg`}
        crossOrigin="anonymous"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.1,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Content overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        {/* Left Sidebar */}
        <div
          style={{
            width: "22vw",
            height: "100vh",
            borderRight: "1px solid rgba(255, 255, 255, 0.05)",
            padding: "5vh 3vw",
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "6vh" }}>
            <div style={{ width: "1.5vw", height: "1.5vw", backgroundColor: "#c8102e", borderRadius: "0.3vw" }} />
            <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#FFFFFF" }}>CREW CARE</div>
          </div>

          <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#565F89", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2vh" }}>
            Contents
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ fontSize: "1vw", color: "#7AA2F7", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.5vw" }}>
              <span style={{ width: "4px", height: "1.2vw", backgroundColor: "#7AA2F7", borderRadius: "2px", marginLeft: "-3vw" }} />
              Overview
            </div>
            <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>The Problem</div>
            <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>SAMPLE Framework</div>
            <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Voice Dictation</div>
            <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Export &amp; Share</div>
          </div>

          <div style={{ marginTop: "auto", fontSize: "0.8vw", color: "#565F89" }}>
            v1.0.0 • 2026
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            padding: "8vh 6vw",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ fontSize: "1vw", color: "#7AA2F7", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, marginBottom: "2vh" }}>
            Crew Care Docs
          </div>

          <h1
            style={{
              fontSize: "4.5vw",
              fontWeight: 700,
              color: "#FFFFFF",
              margin: "0 0 2vh 0",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Crew Care
          </h1>

          <p
            style={{
              fontSize: "1.4vw",
              color: "#9AA5CE",
              lineHeight: 1.6,
              maxWidth: "42vw",
              margin: "0 0 3.5vh 0",
              fontWeight: 400,
            }}
          >
            In-flight medical documentation. Built for speed under pressure.
          </p>

          {/* Platform badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "1.5vh 2vw",
              backgroundColor: "rgba(200, 16, 46, 0.1)",
              border: "1px solid rgba(200, 16, 46, 0.25)",
              borderRadius: "0.5vw",
              marginBottom: "3vh",
              width: "fit-content",
            }}
          >
            <div style={{ fontSize: "1vw", fontWeight: 700, color: "#c8102e", marginRight: "1.5vw", fontFamily: "'DM Mono', monospace" }}>
              iOS
            </div>
            <div style={{ fontSize: "1vw", color: "#FFFFFF", fontFamily: "'DM Mono', monospace" }}>
              expo-router + expo-speech-recognition
            </div>
          </div>

          {/* Two code panels */}
          <div style={{ display: "flex", gap: "3vw", minHeight: 0 }}>

            {/* Left panel: Patient Assessment */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#FFFFFF", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1vh" }}>
                Patient Assessment
              </div>
              <div
                style={{
                  backgroundColor: "#16161E",
                  borderRadius: "0.5vw",
                  padding: "2vh 2vw",
                  border: "1px solid rgba(255,255,255,0.05)",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "1vw",
                  lineHeight: 1.8,
                }}
              >
                <div><span style={{ color: "#c8102e", fontWeight: 700 }}>S</span><span style={{ color: "#565F89" }}> — </span><span style={{ color: "#9AA5CE" }}>Signs &amp; Symptoms</span></div>
                <div><span style={{ color: "#7AA2F7", fontWeight: 700 }}>A</span><span style={{ color: "#565F89" }}> — </span><span style={{ color: "#9AA5CE" }}>Allergies</span></div>
                <div><span style={{ color: "#9ECE6A", fontWeight: 700 }}>M</span><span style={{ color: "#565F89" }}> — </span><span style={{ color: "#9AA5CE" }}>Medications</span></div>
                <div><span style={{ color: "#E0AF68", fontWeight: 700 }}>P</span><span style={{ color: "#565F89" }}> — </span><span style={{ color: "#9AA5CE" }}>Past Medical History</span></div>
                <div><span style={{ color: "#FF9E64", fontWeight: 700 }}>L</span><span style={{ color: "#565F89" }}> — </span><span style={{ color: "#9AA5CE" }}>Last Oral Intake</span></div>
                <div><span style={{ color: "#BB9AF7", fontWeight: 700 }}>E</span><span style={{ color: "#565F89" }}> — </span><span style={{ color: "#9AA5CE" }}>Events Leading Up</span></div>
              </div>
            </div>

            {/* Right panel: App Features */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1vh" }}>
                <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#FFFFFF" }}>App Features</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
                  <div style={{ width: "0.6vw", height: "0.6vw", backgroundColor: "#9ECE6A", borderRadius: "50%" }} />
                  <div style={{ fontSize: "0.9vw", fontFamily: "'DM Mono', monospace", color: "#9ECE6A" }}>Live</div>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#16161E",
                  borderRadius: "0.5vw",
                  padding: "2vh 2vw",
                  border: "1px solid rgba(255,255,255,0.05)",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "1vw",
                  lineHeight: 1.8,
                }}
              >
                <div><span style={{ color: "#7AA2F7" }}>voice_dictation</span><span style={{ color: "#C0CAF5" }}> = </span><span style={{ color: "#9ECE6A" }}>true</span></div>
                <div><span style={{ color: "#7AA2F7" }}>photo_export</span><span style={{ color: "#C0CAF5" }}> = </span><span style={{ color: "#9ECE6A" }}>true</span></div>
                <div><span style={{ color: "#7AA2F7" }}>airdrop_share</span><span style={{ color: "#C0CAF5" }}> = </span><span style={{ color: "#9ECE6A" }}>true</span></div>
                <div><span style={{ color: "#7AA2F7" }}>haptic_feedback</span><span style={{ color: "#C0CAF5" }}> = </span><span style={{ color: "#9ECE6A" }}>true</span></div>
                <div><span style={{ color: "#7AA2F7" }}>sample_framework</span><span style={{ color: "#C0CAF5" }}> = </span><span style={{ color: "#9ECE6A" }}>true</span></div>
              </div>
            </div>

          </div>

          <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end", paddingTop: "2vh" }}>
            <div style={{ fontSize: "0.9vw", color: "#565F89" }}>MEDAIRE INC</div>
          </div>
        </div>
      </div>
    </div>
  );
}
