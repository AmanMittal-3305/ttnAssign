"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// 👇 Dynamic import
const Popup = dynamic(() => import("@/app/components/Popup"), {
  ssr: false, // Important
});

export default function PopupPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Popup Page</h1>

      <button onClick={() => setIsOpen(true)}>
        Open Popup
      </button>

      {isOpen && (
        <Popup onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}