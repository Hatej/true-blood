import React from 'react';
import {useHistory} from "react-router-dom";
import "./SignInForm.css";

function LoginForm(props) {

    let emailText, passwordText, loginText, showPasswordText;
    if (props.language === "croatian") {
        emailText = "e-pošta"
        passwordText = "Lozinka"
        loginText = "Prijavi se"
        showPasswordText = "Prikaži lozinku"
    
    }

    if (props.language === "english") {
        emailText = "email"
        passwordText = "Password"
        loginText = "Log in"
        showPasswordText = "Show password"
    
    }

    const [loginForm, setLoginForm] = React.useState({ email: '', password: ''});
    const [error, setError] = React.useState('');
    const [passwordType, setPasswordType] = React.useState("password")
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        setError("");
        const body = `email=${loginForm.email}&password=${loginForm.password}`;
        const options = {
            method: 'POST',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
        };
        /*
        fetch('/login', options)
            .then(response => {
                if(response.status === 401){
                    setError("Login failed");
                } else {
                    props.logSet(true, loginForm.email); //
                }
            }) 
        */
        props.logSet(true, loginForm.email);
        history.push('/home');

    }

    function onChange(event) {
        const {name, value} = event.target;
        let newForm = {email: loginForm.email, password:loginForm.password};
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
                    <label>{emailText}</label>
                    <input name='email' onChange={onChange} value={loginForm.email} type='email' required/>
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

