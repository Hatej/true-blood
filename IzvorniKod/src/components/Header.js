import React from 'react';
import {Link} from "react-router-dom";
import logo from './logo.png';

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

            <Link to="/home">home</Link>

            <Link to="/signin" hidden={isLoggedIn()}>Sign in</Link>
        
            <Link to="/login" hidden={isLoggedIn()}>Login</Link>

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