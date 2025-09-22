import React, { useEffect, useState } from "react"

export default function App() {
  const [apiMessage, setApiMessage] = useState("loading")

  useEffect(() => {
    fetch("/api/health")
      .then(r => r.json())
      .then(d => setApiMessage(d.message))
      .catch(() => setApiMessage("backend not reachable"))
  }, [])

  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>Vite React Frontend</h1>
      <p>Hot reload is active</p>
      <p>Backend health: {apiMessage}</p>
    </div>
  )
}