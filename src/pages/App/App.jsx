import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import logo from '../../../src/logo.svg';
import './App.css';
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import AboutMe from '../AboutMe/AboutMe'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutme">
            <AboutMe/>
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
