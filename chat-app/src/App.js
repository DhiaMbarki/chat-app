import React from "react";
import "./App.css";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <h1>let's build chat app</h1>
      <div className="app__body">
        <Sidebar/>
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
