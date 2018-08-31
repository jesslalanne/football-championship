import React, { Component } from 'react';
import { AppBar, Toolbar, Button } from "@material-ui/core";

import  { Link } from "react-router-dom";
import CityLogo from '../shared/CityLogo';

class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor:"#98C5E9",
                    boxShadow: "none",
                    padding: "10 px 0",
                    borderBottom: "2px solid #00285E"
                }}
            >
                <Toolbar style={{display: "flex"}}>
                    <div style={{FlexGrow: 1}}>
                        <div className="header_logo">
                            <CityLogo
                                link={true}
                                linkTo="/"
                                width="70px"
                                height="70px"
                            />
                        </div>
                    </div>

                    <Link to="/the_team">
                        <Button color="inherit">The Team</Button>
                    </Link>

                    <Link to="/the_match">
                    <Button color="inherit">Matches</Button>
                    </Link>

                </Toolbar>

            </AppBar>
        );
    }
}

export default Header;