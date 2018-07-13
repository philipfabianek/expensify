import React from "react";
import { connect } from "react-redux";
import { startLogout } from "./../actions/auth";

import { NavLink } from "react-router-dom";

export const Header = (props) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>&nbsp;
        <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>&nbsp;
        {/* <NavLink to="/help" activeClassName="is-active">Help</NavLink>&nbsp; */}
        <button
            onClick={props.startLogout}
        >
            Logout
        </button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
