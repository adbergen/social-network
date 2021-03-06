import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components";

export default function Landing() {
  return (
    <div
      style={{ height: "75vh", backgroundColor: "rgba(255, 0, 0, 0.5)" }}
      className="container valign-wrapper"
    >
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Track</b> your car build and others with {" "}
            <span style={{ fontFamily: "monospace" }}>Mod Garage</span>
          </h4>
          <p className="flow-text grey-text text-darken-1">
            Login below to upload your latest build
          </p>
          <br />
          <div className="col s6">
            <NavLink
              as={RouterNavLink}
              to="/register"
              exact
              activeClassName="router-link-exact-active"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn-large waves-effect waves-light hoverable"
            >
              Register
            </NavLink>
          </div>
          <div className="col s6">
            <NavLink
              as={RouterNavLink}
              to="/login"
              exact
              activeClassName="router-link-exact-active"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn-large waves-effect waves-light hoverable"
            >
              Log In
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
const NavLink = styled.div`
  transition: 250ms ease background-color;
  background: ${(props) => props.theme.buttonBackgroundColor};
  color: ${(props) => props.theme.buttonTextColor};
  &:hover {
    cursor: pointer;
    background-color: skyblue;
  }
`;
