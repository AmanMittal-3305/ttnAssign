"use client";

type PopupProps = {
  onClose: () => void;
};

export default function Popup({ onClose }: PopupProps) {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Popup Text</h2>
        <p>This popup was dynamically imported!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle: React.CSSProperties = {
  background: "white",
  padding: "20px",
  borderRadius: "8px",
};