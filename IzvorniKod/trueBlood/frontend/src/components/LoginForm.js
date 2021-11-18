import React from 'react';
import {useHistory} from "react-router-dom";
import "./SignInForm.css";
import AuthHandler from "./AuthHandler";

function LoginForm(props) {

    let usernameText, passwordText, loginText, showPasswordText;
    if (props.language === "croatian") {
        usernameText = "Korisničko ime"
        passwordText = "Lozinka"
        loginText = "Prijavi se"
        showPasswordText = "Prikaži lozinku"
    
    }

    if (props.language === "english") {
        usernameText = "Username"
        passwordText = "Password"
        loginText = "Log in"
        showPasswordText = "Show password"
    
    }

    const [loginForm, setLoginForm] = React.useState({ username: '', password: ''});
    const [error, setError] = React.useState("");
    const [passwordType, setPasswordType] = React.useState("password")
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        setError("")
        AuthHandler
            .executeBasicAuthenticationService(loginForm.username, loginForm.password)
            .then(() => {
                AuthHandler.registerSuccessfulLogin(loginForm.username, loginForm.password)
                props.logSet(true);
                history.push('/home');
            }).catch(() => {
                setError("Login failed!");
                history.push('/login');
        })

    }

    function onChange(event) {
        const {name, value} = event.target;
        let newForm = {username: loginForm.username, password:loginForm.password};
        newForm[name] = value;
        setLoginForm(newForm);
    }   

    function onClick(event) {
        if(passwordType === "text") {
            setPasswordType("password")
        } else {
            setPasswordType("text")
        }
    }
       

    return (
        <div className="SignupLoginForm">
            <form onSubmit={onSubmit}>
                <div className="FormRow">
                    <label>{usernameText}</label>
                    <input name='username' onChange={onChange} value={loginForm.username} type='text' required/>
                </div>
                <div className="FormRow">
                    <label>{passwordText}</label>
                    <input name='password' type={passwordType} onChange={onChange} value={loginForm.password} required/>
                </div>
                <div className="FormRow">
                    <label>{showPasswordText}</label>
                    <input name='showPassword' onClick={onClick} type="checkbox" checked={passwordType==="text"}/>
                </div>
                <div className='error'>{error}</div>
                <button type="submit">{loginText}</button>
            </form>
        </div>
    )
}

export default LoginForm

