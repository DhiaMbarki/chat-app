import React from "react";
import "./App.css";
import Speak from "./contact/Speak";
import Sidebar from "./leftebar/Leftbar";

function App() {
  return (
    <div className="app">
      <h1>let's build chat app</h1>
      <div className="app__body">
        <Sidebar />
        <Speak />
      </div>
    </div>
  );
}

export default App;
