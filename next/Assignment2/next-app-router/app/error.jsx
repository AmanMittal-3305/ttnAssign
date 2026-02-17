"use client"

import { useEffect } from "react"

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Something went wrong!</h1>
      <p>{error.message}</p>

      <button
        onClick={() => reset()} 
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#1e293b",
          color: "#f8fafc",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Try Again
      </button>
    </div>
  )
}
