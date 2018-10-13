import React from 'react';
import ReactDOM from 'react-dom';

const Info = ({ info }) => (
    <div>
        <h2>Info</h2>
        <p>
            The info is: {info}
        </p>
    </div>
);

const withAdminWarning = WrappedComponent => props => (
    <div>
        {props.isAdmin && <p>This is private info, Please do not share</p>}
        <WrappedComponent {...props} />
    </div>
);

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = WrappedComponent => props => (
    <div>
        {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You are not authorized, Please log in.</p>}
    </div>
);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="details" />, document.getElementById('App'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="details" />, document.getElementById('App'));
