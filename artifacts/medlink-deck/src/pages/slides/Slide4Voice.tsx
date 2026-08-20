export default function Slide4Voice() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{
        backgroundColor: "#1A1B26",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        color: "#C0CAF5",
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
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Overview</div>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>The Problem</div>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>SAMPLE Framework</div>
          <div style={{ fontSize: "1vw", color: "#7AA2F7", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.5vw" }}>
            <span style={{ width: "4px", height: "1.2vw", backgroundColor: "#7AA2F7", borderRadius: "2px", marginLeft: "-3vw" }} />
            Voice Dictation
          </div>
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
          padding: "7vh 6vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ fontSize: "1vw", color: "#7AA2F7", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, marginBottom: "2vh" }}>
          Features
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
          Voice Dictation
        </h1>
        <p style={{ fontSize: "1.4vw", color: "#9AA5CE", lineHeight: 1.6, maxWidth: "40vw", margin: "0 0 4vh 0", fontWeight: 400 }}>
          Every text field accepts spoken input. Tap the mic, speak, done.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "3vh", maxWidth: "52vw" }}>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "rgba(122, 162, 247, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7AA2F7", fontSize: "1.2vw", fontWeight: 700, flexShrink: 0 }}>1</div>
            <div style={{ width: "100%" }}>
              <div style={{ fontSize: "1.4vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "0.6vh" }}>Tap the mic button on any field</div>
              <div style={{ fontSize: "1.1vw", color: "#9AA5CE", lineHeight: 1.5 }}>
                Every text input has a mic icon. One tap activates listening for that field.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "rgba(158, 206, 106, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ECE6A", fontSize: "1.2vw", fontWeight: 700, flexShrink: 0 }}>2</div>
            <div style={{ width: "100%" }}>
              <div style={{ fontSize: "1.4vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "0.6vh" }}>Speak — transcript appends instantly</div>
              <div style={{ fontSize: "1.1vw", color: "#9AA5CE", lineHeight: 1.5 }}>
                Transcribed text is appended to whatever is already in the field. Dictate in parts without losing earlier input.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "rgba(224, 175, 104, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E0AF68", fontSize: "1.2vw", fontWeight: 700, flexShrink: 0 }}>3</div>
            <div>
              <div style={{ fontSize: "1.4vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "0.6vh" }}>Switch fields — previous session closes automatically</div>
              <div style={{ fontSize: "1.1vw", color: "#9AA5CE", lineHeight: 1.5 }}>
                Tapping a different field's mic stops the current session and starts the new one. No manual stop needed.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "rgba(187, 154, 247, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#BB9AF7", fontSize: "1.2vw", fontWeight: 700, flexShrink: 0 }}>4</div>
            <div>
              <div style={{ fontSize: "1.4vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "0.6vh" }}>Works via iOS speech recognition — no internet required</div>
              <div style={{ fontSize: "1.1vw", color: "#9AA5CE", lineHeight: 1.5, fontFamily: "inherit" }}>
                Uses <span style={{ fontFamily: "'DM Mono', monospace", color: "#BB9AF7", backgroundColor: "rgba(187,154,247,0.1)", padding: "0.1vh 0.4vw", borderRadius: "0.2vw" }}>expo-speech-recognition</span> with on-device processing — reliable at 35,000 ft.
              </div>
            </div>
          </div>

        </div>

        <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", color: "#565F89", fontWeight: 500 }}>04</div>
          <div style={{ fontSize: "0.9vw", color: "#565F89" }}>MEDAIRE INC</div>
        </div>
      </div>
    </div>
  );
}
