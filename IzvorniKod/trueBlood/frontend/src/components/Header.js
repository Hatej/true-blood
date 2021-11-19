import React from 'react';
import {Link, useHistory} from "react-router-dom";
import logo from './logo.png';
import "./Header.css";
import AuthHandler from "./AuthHandler";

function Header(props) {


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
        <header className="Header">
            <div className="logoContainer container">
                
            </div>
            <ul> 
                <li>
                    <Link to="/home"><img src={logo}/><span> True Blood</span></Link>
                </li>
                <li>
                    <Link to="/home">{homeText}</Link>
                </li>
                <li className="right">
                    <Link to="/language">{chooseLanguageText}</Link>
                </li>
                <li className="right">
                    <Link to="/signin" hidden={AuthHandler.isUserLoggedIn()}>{signupText}</Link>
                </li>
                <li className="right">
                    <Link to="/login" hidden={AuthHandler.isUserLoggedIn()}>{loginText}</Link>
                </li>
                <li className="right">
                    <span hidden={!AuthHandler.isUserLoggedIn()} className='userInfo'> {AuthHandler.getLoggedInUserName()} </span>
                </li>   
                <li className="right">        
                    <button disabled={!AuthHandler.isUserLoggedIn()} onClick={logout} hidden={!AuthHandler.isUserLoggedIn()} className="right">{logoutText}</button>
                </li>
            </ul> 
        </header>
    )
}

export default Header;