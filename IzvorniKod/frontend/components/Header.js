import React from 'react';
import {Link, useHistory} from "react-router-dom";
import logo from './logo.png';
import "./Header.css";

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

    function isLoggedIn() {
        return (props.log.isLoggedIn === true)
    }

    function logout() {
        props.logSet(false, "")
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
                    <Link to="/signin" hidden={isLoggedIn()}>{signupText}</Link>
                </li>
                <li className="right">
                    <Link to="/login" hidden={isLoggedIn()}>{loginText}</Link>
                </li>
                <li className="right">
                    <span hidden={!isLoggedIn()}> {props.log.email} </span>
                </li>   
                <li className="right">        
                    <button disabled={!isLoggedIn()} onClick={logout} hidden={!isLoggedIn()} className="right">{logoutText}</button> 
                </li>
            </ul> 
        </header>
    )
}

export default Header;