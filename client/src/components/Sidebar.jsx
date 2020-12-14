import React, { useState, Component } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import LocalBarRoundedIcon from '@material-ui/icons/LocalBarRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";
import "../App.css";

class Sidebar extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

  return (
    <SidebarTheme>
      
      <List disablePadding dense>
        <ListItem button style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <AccountCircleRoundedIcon style={{ marginRight: "5px" }} />
          <NavLink
            as={RouterNavLink}
            to="/profile"
            exact
            activeClassName="router-link-exact-active"
          >
             
          {user.name}
          
          </NavLink>
        </ListItem>
        <Divider />
        <ListItem button style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <PersonRoundedIcon style={{ marginRight: "5px" }} />
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
          <LocalBarRoundedIcon style={{ marginRight: "5px" }}/>
          <NavLink
            as={RouterNavLink}
            to="/"
            exact
            activeClassName="router-link-exact-active"
          >
            Drinking Games
          </NavLink>
        </ListItem>
        <Divider />

        <ListItem button style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <SettingsRoundedIcon style={{ marginRight: "5px" }}/>
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
}

Sidebar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Sidebar);

const NavLink = styled.div`
color: ${(props) => props.theme.sidebarTextColor};
`;

const SidebarTheme = styled.div`
  position: absolute;
  width: 200px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #505050;
  color: ${(props) => props.theme.sidebarTextColor};
  float: left;
`;
