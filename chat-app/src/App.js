import React, {useState} from 'react';
import "./App.css";
import Speak from "./contact/Speak";
import Sidebar from "./leftebar/Leftbar";
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Login from './login/Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
              {!user ? (
          <h1>login</h1>
        ):(
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
        )}
    </div>
  );
}

export default App;
