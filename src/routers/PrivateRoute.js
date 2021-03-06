import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

// import TopHeader from "./../components/new/TopHeader";
import Interface from "./../components/interface/Interface";
// import Header from "./../components/Header";

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                isAuthenticated ? (
                    <div>
                        {/* <TopHeader /> */}
                        {/* <Header /> */}
                        <Interface
                            {...props}
                        >
                            <Component {...props} />
                        </Interface>
                    </div>
                ) : (
                    <Redirect to="/" />
                )
            )}
        />
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
