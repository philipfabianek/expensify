import React from "react";
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

export default (props) => {
    return (
        <div className="loading-screen">
            <div className="loading-screen__content">
                {/* <Typography
                    variant="display2"
                >
                    Loading...
                </Typography> */}
                <CircularProgress
                    className="loading-screen__circle"
                    size={80}
                    thickness={3}
                    // style={{ color: "#fff" }}
                />
            </div>
        </div>
    );
};
