import React from "react";
import "./app.css";

function App() {
  return (
    <div className="container"> 
      <header className="title">Water Watcher</header>
      <div className="howMuch">
        <div>How much water did you drink today?</div>
        <div>Goal: ___</div>
      </div>
    </div>
  );
}

export default App;
