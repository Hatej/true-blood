import React from 'react';
import {Link} from "react-router-dom";
import logo from './logo.png';
import "./Header.css";

function Header(props) {
    
    let button;

    function isLoggedIn() {
        return (props.log.isLoggedIn === true)
    }

    function logout() {
        props.logSet(false, "")
    }

    return (
        <header className="Header">

            <Link id='home' to="/home">Home</Link>

            <Link id='signin' to="/signin" hidden={isLoggedIn()}>Signup</Link>
        
            <Link id='login' to="/login" hidden={isLoggedIn()}>Login</Link>

            <span hidden={!isLoggedIn()}> {props.log.email} </span>
            

            <button hidden={!isLoggedIn()} disabled={!isLoggedIn()} onClick={logout}>Logout</button> 

            <div className="logoContainer container">
                <Link to="/home"><img src={logo}/></Link>
                
                <span>True Blood</span>
            </div>
            
        </header>

            
        
    )
}

export default Header;