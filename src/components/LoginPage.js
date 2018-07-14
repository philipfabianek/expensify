import React from "react";
import { connect } from "react-redux";
import { startLogin } from "./../actions/auth";

import Button from '@material-ui/core/Button';
import grey from "@material-ui/core/colors/grey";

export const LoginPage = (props) => {
    return (
        <div className="login__container">
            <div className="login">
                <div className="login__content">
                    <h1>
                        Expensify
                    </h1>
                    <h2>It&nbsp;is&nbsp;time to&nbsp;take&nbsp;control of&nbsp;your&nbsp;life</h2>
                    <Button
                        color="inherit"
                        onClick={props.startLogin}
                        variant="contained"
                    >
                        Log In
                    </Button>
                </div>
                <div className="login__more">

                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
