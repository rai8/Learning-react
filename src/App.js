import React from "react"
import Person from "./components/Person"

import "./App.css"

function App() {
  return (
    <div>
      <h1>Introduction to React</h1>
      <div style={styles}>
        <Person name="Rhytonne" age="24" />
        <Person name="Bridgit" age="17" />
      </div>
    </div>
  )
}
const styles = {
  display: "flex",
}

export default App
