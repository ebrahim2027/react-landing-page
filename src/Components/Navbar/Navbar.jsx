import "./Navbar.css";

import React from "react";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">EV-olution</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );
}
