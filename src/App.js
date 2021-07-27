import './App.css';
import Header from "./Header"
import Sidebar from './Sidebar';
import Chat from "./Chat"
import React, { useState } from "react"
import Login from "./Login"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Fragment } from 'react';

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="app">
      <Router>
        {!user ? (<Login />) : <><Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="">
                <h1>YouTube Channel</h1>
              </Route>
            </Switch>
          </div></>}

      </Router>
    </div>
  );
}

export default App;
