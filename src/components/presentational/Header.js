import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Header = ({ logOut }) => (
    <div>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="navlink-active" exact={true}>Home Page</NavLink>
        <NavLink to="/create" activeClassName="navlink-active">Create Expense</NavLink>
        {/* <NavLink to="/help" activeClassName="navlink-active">Help</NavLink> */}
        <button type="button" onClick={logOut}>Log Out</button>
    </div>
);

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
