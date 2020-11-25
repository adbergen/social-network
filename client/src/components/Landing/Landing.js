import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div
      style={{ height: "75vh", backgroundColor: "rgba(255, 0, 0, 0.5)" }}
      className="container valign-wrapper"
    >
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Meet</b> friends with the{" "}
            <span style={{ fontFamily: "monospace" }}>Social Network</span> app
          </h4>
          <p className="flow-text grey-text text-darken-1">
            A True Social Experience
          </p>
          <br />
          <div className="col s6">
            <Link
              to="/register"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </Link>
          </div>
          <div className="col s6">
            <Link
              to="/login"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
