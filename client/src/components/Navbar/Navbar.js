import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-fixed">
      <nav className="z-depth-0">
        <div className="nav-wrapper black">
          <Link
            to="/dashboard"
            style={{
              fontFamily: "monospace",
            }}
            className="col s5 brand-logo center white-text"
          >
            Social Network
          </Link>
        </div>
      </nav>
    </div>
  );
}
