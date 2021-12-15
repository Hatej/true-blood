import React from 'react';
import {useHistory} from "react-router-dom";
import AuthHandler from "./AuthHandler";
import { Form, Button } from 'react-bootstrap';

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
            .then((res) => {
                AuthHandler.registerSuccessfulLogin(loginForm.username, loginForm.password, res.data.role);
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
        <div className="container col-md-4 col-md-offset-4 border border-danger rounded">
            <Form className="mt-3 mb-3" onSubmit={onSubmit}>
                <Form.Group className="col-xs-2">
                    <Form.Label>First name</Form.Label>
                    <Form.Control 
                        required
                        type="text"
                        name="username"
                        value={loginForm.username}
                        onChange={onChange}
                        placeholder="First name"  
                    />
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        required
                        type="password"
                        name="password"
                        value={loginForm.password}
                        onChange={onChange}
                        placeholder="Password"  
                    />
                </Form.Group>
                <hr/>
                <Button className="btn-danger" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default LoginForm

