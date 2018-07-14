import React from "react";
import { connect } from "react-redux";
import { startLogin } from "./../actions/auth";

import Button from '@material-ui/core/Button';
import grey from "@material-ui/core/colors/grey";

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundSize: undefined
        };
    };

    render() {
        if (this.props.history.location === "/") {
            document.body.onresize = () => {
                const width = window.innerWidth;
                const height = window.innerHeight;

                if (1.78 * height > width) {
                    this.setState(() => ({
                        backgroundSize: "178vh"
                    }));
                } else {
                    this.setState(() => ({
                        backgroundSize: "100vw"
                    }));
                }
            };
        }

        return (
            <div className="login__container">
                <div className="login">
                    <style>{`\
                        .login{\
                            background-size: ${this.state.backgroundSize};\
                        }\
                    `}</style>
                    <div className="login__content">
                        <h1>
                            Expensify
                        </h1>
                        <h2>It&nbsp;is&nbsp;time to&nbsp;take&nbsp;control of&nbsp;your&nbsp;life</h2>
                        <Button
                            color="inherit"
                            onClick={this.props.startLogin}
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
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
