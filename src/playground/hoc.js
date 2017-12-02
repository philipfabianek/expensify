// Higher Order Component (HOC) - A Component
// that renders another component

// Reuse code
// Render hijacking
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please, do not share!</p> }
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ?
                <div>
                    <p>Here is your private inforamtion:</p>
                    <WrappedComponent {...props} />
                </div> :
                <p>Please log in to see your private information.</p>
            }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
    // <AdminInfo isAdmin info="This is my information." />,
    <AuthInfo isAuthenticated={1} info="This is my information." />,
    document.getElementById("app")
);
