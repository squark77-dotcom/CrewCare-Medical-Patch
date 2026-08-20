export default function Slide3Sample() {
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
          <div style={{ fontSize: "1vw", color: "#7AA2F7", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.5vw" }}>
            <span style={{ width: "4px", height: "1.2vw", backgroundColor: "#7AA2F7", borderRadius: "2px", marginLeft: "-3vw" }} />
            SAMPLE Framework
          </div>
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
          Core Concepts
        </div>
        <h1
          style={{
            fontSize: "4.5vw",
            fontWeight: 700,
            color: "#FFFFFF",
            margin: "0 0 1.5vh 0",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          SAMPLE Framework
        </h1>
        <p style={{ fontSize: "1.3vw", color: "#9AA5CE", lineHeight: 1.6, margin: "0 0 4vh 0", fontWeight: 400, maxWidth: "48vw" }}>
          A six-field protocol for gathering patient history in any emergency. Every field maps directly to a section of the checklist.
        </p>

        {/* 2-column grid of SAMPLE items */}
        <div style={{ display: "flex", gap: "3vw", flex: 1 }}>

          {/* Left column: S, A, M */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw", backgroundColor: "rgba(255,255,255,0.02)", borderRadius: "0.5vw", padding: "2vh 2vw", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ width: "2.8vw", height: "2.8vw", borderRadius: "0.4vw", backgroundColor: "rgba(200, 16, 46, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c8102e", fontSize: "1.6vw", fontWeight: 800, flexShrink: 0, fontFamily: "'DM Mono', monospace" }}>S</div>
              <div>
                <div style={{ fontSize: "1.2vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "0.4vh" }}>Signs &amp; Symptoms</div>
                <div style={{ fontSize: "1vw", color: "#9AA5CE", lineHeight: 1.5 }}>What you observe and what the patient reports feeling</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw", backgroundColor: "rgba(255,255,255,0.02)", borderRadius: "0.5vw", padding: "2vh 2vw", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ width: "2.8vw", height: "2.8vw", borderRadius: "0.4vw", backgroundColor: "rgba(122, 162, 247, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7AA2F7", fontSize: "1.6vw", fontWeight: 800, flexShrink: 0, fontFamily: "'DM Mono', monospace" }}>A</div>
              <div>
                <div style={{ fontSize: "1.2vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "0.4vh" }}>Allergies</div>
                <div style={{ fontSize: "1vw", color: "#9AA5CE", lineHeight: 1.5 }}>Known allergens and the type of reaction they cause</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw", backgroundColor: "rgba(255,255,255,0.02)", borderRadius: "0.5vw", padding: "2vh 2vw", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ width: "2.8vw", height: "2.8vw", borderRadius: "0.4vw", backgroundColor: "rgba(158, 206, 106, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ECE6A", fontSize: "1.6vw", fontWeight: 800, flexShrink: 0, fontFamily: "'DM Mono', monospace" }}>M</div>
              <div>
                <div style={{ fontSize: "1.2vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "0.4vh" }}>Medications</div>
                <div style={{ fontSize: "1vw", color: "#9AA5CE", lineHeight: 1.5 }}>Prescriptions, OTC, supplements, and when last taken</div>
              </div>
            </div>

          </div>

          {/* Right column: P, L, E */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw", backgroundColor: "rgba(255,255,255,0.02)", borderRadius: "0.5vw", padding: "2vh 2vw", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ width: "2.8vw", height: "2.8vw", borderRadius: "0.4vw", backgroundColor: "rgba(224, 175, 104, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E0AF68", fontSize: "1.6vw", fontWeight: 800, flexShrink: 0, fontFamily: "'DM Mono', monospace" }}>P</div>
              <div>
                <div style={{ fontSize: "1.2vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "0.4vh" }}>Past Medical History</div>
                <div style={{ fontSize: "1vw", color: "#9AA5CE", lineHeight: 1.5 }}>Conditions, surgeries, and previous similar episodes</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw", backgroundColor: "rgba(255,255,255,0.02)", borderRadius: "0.5vw", padding: "2vh 2vw", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ width: "2.8vw", height: "2.8vw", borderRadius: "0.4vw", backgroundColor: "rgba(255, 158, 100, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF9E64", fontSize: "1.6vw", fontWeight: 800, flexShrink: 0, fontFamily: "'DM Mono', monospace" }}>L</div>
              <div>
                <div style={{ fontSize: "1.2vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "0.4vh" }}>Last Oral Intake</div>
                <div style={{ fontSize: "1vw", color: "#9AA5CE", lineHeight: 1.5 }}>What and when the patient last ate or drank</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw", backgroundColor: "rgba(255,255,255,0.02)", borderRadius: "0.5vw", padding: "2vh 2vw", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ width: "2.8vw", height: "2.8vw", borderRadius: "0.4vw", backgroundColor: "rgba(187, 154, 247, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#BB9AF7", fontSize: "1.6vw", fontWeight: 800, flexShrink: 0, fontFamily: "'DM Mono', monospace" }}>E</div>
              <div>
                <div style={{ fontSize: "1.2vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "0.4vh" }}>Events Leading Up</div>
                <div style={{ fontSize: "1vw", color: "#9AA5CE", lineHeight: 1.5 }}>The sequence of events immediately before onset</div>
              </div>
            </div>

          </div>
        </div>

        <div style={{ marginTop: "2.5vh", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", color: "#565F89", fontWeight: 500 }}>03</div>
          <div style={{ fontSize: "0.9vw", color: "#565F89" }}>MEDAIRE INC</div>
        </div>
      </div>
    </div>
  );
}
