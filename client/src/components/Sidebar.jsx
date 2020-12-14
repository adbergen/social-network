import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import "../App.css"

export default function Sidebar() {
  return (
    <SidebarTheme>
          <List disablePadding dense>
      <ListItem button style={{ paddingTop: "10px", paddingBottom: "10px" }}>
      <NavLink
          as={RouterNavLink}
          to="/"
          exact
          activeClassName="router-link-exact-active"
        >
          Home
        </NavLink>
      </ListItem>
      <Divider />
      <ListItem button style={{ paddingTop: "10px", paddingBottom: "10px" }}>
      <NavLink
          as={RouterNavLink}
          to="/"
          exact
          activeClassName="router-link-exact-active"
        >
          Friends
        </NavLink>
      </ListItem>
      <Divider />

      <ListItem button style={{ paddingTop: "10px", paddingBottom: "10px" }}>
      <NavLink
          as={RouterNavLink}
          to="/"
          exact
          activeClassName="router-link-exact-active"
        >
          Games
        </NavLink>
      </ListItem>
      <Divider />

      <ListItem button style={{ paddingTop: "10px", paddingBottom: "10px" }}>
      <NavLink
          as={RouterNavLink}
          to="/"
          exact
          activeClassName="router-link-exact-active"
        >
          Settings
        </NavLink>
      </ListItem>
    </List>
    </SidebarTheme>
  );
}

const NavLink = styled.div`
border: 1px solid rgba(0, 0, 0, 0.1);
color: ${(props) => props.theme.sidebarTextColor};
  }
`;


const SidebarTheme = styled.div`
  position: absolute;
  width: 200px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #505050;
  color: ${(props) => props.theme.sidebarTextColor};
  float: left;
`;
