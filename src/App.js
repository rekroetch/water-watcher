import React, {useState} from "react";
import "./app.css";


function App() {
  const [water, setWater] = useState(0)

  function addWater(event) {
    event.preventDefault()
    setWater(water+1)
  }

  return (
    <div className="container"> 
      <header className="title">Water Watcher</header>
      <div className="howMuch">
        <div className="prompt">Click for every cup of water you drank today!</div>
        <div onClick={addWater} value="1"><i className="fas fa-tint droplet"></i></div>
        <div className="totalWater">{water} cup(s)</div>
      </div>
    </div>
  );
}

export default App;
