import React from 'react';
import {Link, useHistory} from "react-router-dom";
import logo from './logo.png';
import "./Header.css";
import AuthHandler from "./AuthHandler";
import { Nav } from 'react-bootstrap';

function Header(props) {

    let role = AuthHandler.getLoggedInRole();
    let isLoggedIn = AuthHandler.isUserLoggedIn();
    let loggedInUserName = AuthHandler.getLoggedInUserName();

    role = "DJELATNIK";
    isLoggedIn = true;
    loggedInUserName = "kONRADIOUS";

    var roleLink, roleText;
    if (role === "ADMIN") {
        roleLink = "/admin";
        roleText = "Administrator";
    } else if (role === "DJELATNIK") {
        roleLink =  "/employee";
        roleText = "Employee";
    } else if (role === "DONOR") {
        roleLink = "/donor";
        roleText = "Donor";
    }

    let homeText, chooseLanguageText, signupText, loginText, logoutText;
    if (props.language === "croatian") {
        homeText = "Početna"
        chooseLanguageText = "Odabir jezika"
        signupText = "Registriraj se"
        loginText = "Prijavi se"
        logoutText = "Odjavi se"
    }

    if (props.language === "english") {
        homeText = "Home"
        chooseLanguageText = "Choose language"
        signupText = "Signup"
        loginText = "Login"
        logoutText = "Logout"
    }

    const history = useHistory();

    function logout() {
        props.logSet(false);
        AuthHandler.logout();
        history.push("/home");
    }

    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <Nav.Item>
                    <Nav.Link className="navbar-brand" href="/home">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                        Home
                    </Nav.Link>
                </Nav.Item>
                <div className="navbar-nav justify-content-end ms-auto">
                    <Nav.Item>
                        <Nav.Link href="/language">{chooseLanguageText}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={roleLink} hidden={!isLoggedIn}>{roleText}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/signin" hidden={isLoggedIn}>{signupText}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/login" hidden={isLoggedIn}>{loginText}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link hidden={!isLoggedIn} disabled>{loggedInUserName}</Nav.Link>
                    </Nav.Item> 
                    <Nav.Item>
                        <Nav.Link disabled={!isLoggedIn} onClick={logout} hidden={!isLoggedIn}>{logoutText}</Nav.Link>
                    </Nav.Item>
                </div>
            </nav>
            <br/>
        </div>
        
    )
}

export default Header;