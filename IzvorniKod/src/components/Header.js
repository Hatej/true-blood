import React from 'react';
import {Link, useHistory} from "react-router-dom";
import logo from './logo.png';
import "./Header.css";

function Header(props) {

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
                    <Link to="/home"><img src={logo}/><span>True Blood</span></Link>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li className="right">
                    <Link to="/signin" hidden={isLoggedIn()}>Signup</Link>
                </li>
                <li className="right">
                    <Link to="/login" hidden={isLoggedIn()}>Login</Link>
                </li>
                <li className="right">
                    <span hidden={!isLoggedIn()}> {props.log.email} </span>
                </li>   
                <li className="right">        
                    <button disabled={!isLoggedIn()} onClick={logout} hidden={!isLoggedIn()} className="right">Logout</button> 
                </li>
            </ul> 
        </header>
    )
}

export default Header;