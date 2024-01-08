import React from "react";
import "../css/App.css";
import { Link } from "react-router-dom";

function GlobalNavigation() {
  return (
    <nav>
      <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
        <li style={{ marginRight: "10px", marginLeft: "15px " }}>
          {/* Link zu Home.js */}
          <Link to="/" className="linkStyle">
            Home
          </Link>
        </li>
        <li style={{ marginRight: "10px", marginLeft: "15px " }}>
          {/* Link zu Suchen.js */}
          <Link to="/suchen" className="linkStyle">
            Suchen
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default GlobalNavigation;
