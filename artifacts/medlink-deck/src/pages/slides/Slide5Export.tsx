export default function Slide5Export() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{
        backgroundColor: "#1A1B26",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#C0CAF5",
        background: "radial-gradient(ellipse at center, rgba(122, 162, 247, 0.08) 0%, rgba(26, 27, 38, 1) 65%)",
      }}
    >
      {/* Logo mark */}
      <div
        style={{
          width: "4.5vw",
          height: "4.5vw",
          backgroundColor: "#c8102e",
          borderRadius: "1vw",
          marginBottom: "3vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "2.2vw",
            height: "2.2vw",
            backgroundColor: "#1A1B26",
            borderRadius: "0.5vw",
          }}
        />
      </div>

      <h1
        style={{
          fontSize: "5vw",
          fontWeight: 700,
          color: "#FFFFFF",
          margin: "0 0 2.5vh 0",
          letterSpacing: "-0.02em",
          textAlign: "center",
        }}
      >
        Export &amp; Share
      </h1>

      <p
        style={{
          fontSize: "1.5vw",
          color: "#9AA5CE",
          lineHeight: 1.6,
          maxWidth: "38vw",
          margin: "0 0 5vh 0",
          fontWeight: 400,
          textAlign: "center",
        }}
      >
        One tap from completed form to the physician's hands. No cables, no re-entry, no delay.
      </p>

      {/* 4 feature cards in a row */}
      <div style={{ display: "flex", gap: "2vw", marginBottom: "5vh" }}>

        <div style={{ width: "14vw", padding: "2.5vh 2vw", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.7vw" }}>
          <div style={{ fontSize: "1.1vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "1vh" }}>Save to Photos</div>
          <div style={{ fontSize: "1vw", color: "#9AA5CE", lineHeight: 1.5 }}>Captures the completed form as a full-resolution PNG in the camera roll</div>
        </div>

        <div style={{ width: "14vw", padding: "2.5vh 2vw", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.7vw" }}>
          <div style={{ fontSize: "1.1vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "1vh" }}>AirDrop to crew</div>
          <div style={{ fontSize: "1vw", color: "#9AA5CE", lineHeight: 1.5 }}>Open Photos and AirDrop instantly to the Physician's Kit or ground team</div>
        </div>

        <div style={{ width: "14vw", padding: "2.5vh 2vw", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.7vw" }}>
          <div style={{ fontSize: "1.1vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "1vh" }}>Share sheet fallback</div>
          <div style={{ fontSize: "1vw", color: "#9AA5CE", lineHeight: 1.5 }}>If Photos access is denied, the iOS share sheet opens automatically</div>
        </div>

        <div style={{ width: "14vw", padding: "2.5vh 2vw", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.7vw" }}>
          <div style={{ fontSize: "1.1vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "1vh" }}>One tap to transmit</div>
          <div style={{ fontSize: "1vw", color: "#9AA5CE", lineHeight: 1.5 }}>Everything ground physicians need — patient history, vitals, flight details — in a single image</div>
        </div>

      </div>

      {/* Footer row */}
      <div
        style={{
          display: "flex",
          gap: "4vw",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          paddingTop: "3vh",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
          <div style={{ width: "0.7vw", height: "0.7vw", backgroundColor: "#9ECE6A", borderRadius: "50%" }} />
          <div style={{ fontSize: "1.1vw", color: "#C0CAF5" }}>iOS Native</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
          <div style={{ width: "0.7vw", height: "0.7vw", backgroundColor: "#E0AF68", borderRadius: "50%" }} />
          <div style={{ fontSize: "1.1vw", color: "#C0CAF5" }}>Works offline</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
          <div style={{ width: "0.7vw", height: "0.7vw", backgroundColor: "#7AA2F7", borderRadius: "50%" }} />
          <div style={{ fontSize: "1.1vw", color: "#C0CAF5" }}>A MedAire service</div>
        </div>
      </div>

      {/* Slide number */}
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "6vw",
          right: "6vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "1vw", color: "#565F89", fontWeight: 500 }}>05</div>
        <div style={{ fontSize: "0.9vw", color: "#565F89" }}>MEDAIRE INC</div>
      </div>
    </div>
  );
}
