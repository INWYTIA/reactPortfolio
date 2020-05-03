import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import Profile from "./components/pages/Profile";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Profile} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
