import React from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      fixed="top"
      style={{
        marginLeft: "400px",
        marginRight: "400px",
        border: "none",
        backgroundColor: "white",
      }}
    >
      <Navbar.Brand href="#home">Social Network</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <NavDropdown title="Downloads" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://coparse-release.s3.amazonaws.com/CoParse-1.4.1.dmg">
              CoParse for Mac
            </NavDropdown.Item>
            <NavDropdown.Item href="https://coparse-release.s3.amazonaws.com/CoParse+Setup+1.4.1.exe">
              CoParse for Windows
            </NavDropdown.Item>
            <NavDropdown.Item href="https://online.coparse.com/">
              CoParse Web App
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            href="mailto:anthonydbergen@gmail.com"
            target="_blank"
            rel="nopener noreferrer"
          >
            Contact
          </Nav.Link>
          <Nav.Link href="#privacy">Privacy</Nav.Link>
        </Nav>
        <Button
          variant="primary"
          href="https://demo.coparse.com/"
          target="_blank"
        >
          Login
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
