import React from "react";
import {Bars, Nav, NavLink, NavMenu} from "./Navbar/NavbarElements"

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <Bars/>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        R&#233;sum&#233;
                    </NavLink>
                    <NavLink to="/blogs" activeStyle>
                        Portfolio
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Find Me
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;