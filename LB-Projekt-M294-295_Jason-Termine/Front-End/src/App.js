import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Suchen from "./components/Suchen";
import GlobalNavigation from "./components/GlobalNavigation";

function App() {
  return (
    /********** ChatGPT ab dieser Line bis und mit Line 23 *************/
    <Router>
      <div>
        {/* Navigation rendern*/}
        <GlobalNavigation />
        <hr />
        <Routes>
          {/* Route zu Home.js */}
          <Route path="/" element={<Home />} />

          {/* Route zu Suchen.js*/}
          <Route path="/suchen" element={<Suchen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
