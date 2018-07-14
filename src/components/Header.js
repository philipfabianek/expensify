import React from "react";

import { NavLink } from "react-router-dom";

const Header = (props) => (
    <header>
        {/* <h1>Expensify</h1> */}
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>&nbsp;
        <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>&nbsp;
    </header>
);

export default Header;
