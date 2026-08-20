export default function Slide2Problem() {
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
          <div style={{ fontSize: "1vw", color: "#7AA2F7", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.5vw" }}>
            <span style={{ width: "4px", height: "1.2vw", backgroundColor: "#7AA2F7", borderRadius: "2px", marginLeft: "-3vw" }} />
            The Problem
          </div>
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
          padding: "7vh 6vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ fontSize: "1vw", color: "#7AA2F7", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, marginBottom: "2vh" }}>
          Context
        </div>
        <h1
          style={{
            fontSize: "4.5vw",
            fontWeight: 700,
            color: "#FFFFFF",
            margin: "0 0 4vh 0",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          The Problem
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "3vh", maxWidth: "52vw" }}>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "rgba(122, 162, 247, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7AA2F7", fontSize: "1.2vw", fontWeight: 700, flexShrink: 0 }}>1</div>
            <div>
              <div style={{ fontSize: "1.4vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "0.6vh" }}>Medical events at 35,000 ft require exact documentation</div>
              <div style={{ fontSize: "1.1vw", color: "#9AA5CE", lineHeight: 1.5 }}>
                Ground physicians receive only what was recorded in the air. Every missed field is a gap in the clinical picture.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "rgba(158, 206, 106, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ECE6A", fontSize: "1.2vw", fontWeight: 700, flexShrink: 0 }}>2</div>
            <div>
              <div style={{ fontSize: "1.4vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "0.6vh" }}>Handwriting is slow, illegible, and hard to transmit</div>
              <div style={{ fontSize: "1.1vw", color: "#9AA5CE", lineHeight: 1.5 }}>
                Paper forms get lost, can't be AirDropped, and require re-entry on the ground — adding critical delay.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "rgba(224, 175, 104, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E0AF68", fontSize: "1.2vw", fontWeight: 700, flexShrink: 0 }}>3</div>
            <div>
              <div style={{ fontSize: "1.4vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "0.6vh" }}>Incomplete history leads to delayed treatment</div>
              <div style={{ fontSize: "1.1vw", color: "#9AA5CE", lineHeight: 1.5 }}>
                Missing allergies, medications, or past conditions force physicians to treat conservatively — or guess.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "rgba(200, 16, 46, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c8102e", fontSize: "1.2vw", fontWeight: 700, flexShrink: 0 }}>4</div>
            <div>
              <div style={{ fontSize: "1.4vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "0.6vh" }}>Flight attendants need structure, not a blank notepad</div>
              <div style={{ fontSize: "1.1vw", color: "#9AA5CE", lineHeight: 1.5 }}>
                Under stress, an unguided form produces inconsistent, incomplete data. A structured checklist eliminates that risk.
              </div>
            </div>
          </div>

        </div>

        <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", color: "#565F89", fontWeight: 500 }}>02</div>
          <div style={{ fontSize: "0.9vw", color: "#565F89" }}>MEDAIRE INC</div>
        </div>
      </div>
    </div>
  );
}
