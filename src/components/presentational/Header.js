import React from 'react';
import {
    NavLink
} from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="navlink-active" exact={true}>Home Page</NavLink>
        <NavLink to="/create" activeClassName="navlink-active">Create Expense</NavLink>
        {/* <NavLink to="/edit" activeClassName="navlink-active">Edit Expense</NavLink> */}
        <NavLink to="/help" activeClassName="navlink-active">Help</NavLink>
    </div>
);

export default Header;
