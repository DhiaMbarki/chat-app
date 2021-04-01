import React from "react";
import "./App.css";
import Speak from "./contact/Speak";
import Sidebar from "./leftebar/Leftbar";
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <h1>let's build chat app</h1>
      <div className="app__body">
        <Router>
        <Sidebar />

          <Switch>
            <Route path="/rooms/:roomId">
              <Speak />
            </Route>
              <Route path="/">
              <Speak />

              </Route>
            
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
