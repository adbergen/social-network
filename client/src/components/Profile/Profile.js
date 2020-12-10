import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components";
import { Card, Button, Nav } from "react-bootstrap";

export default function Profile() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Profile</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
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
