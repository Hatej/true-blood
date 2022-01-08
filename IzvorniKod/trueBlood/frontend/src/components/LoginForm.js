import React from 'react';
import { useState } from 'react';
import {useHistory} from "react-router-dom";
import AuthHandler from "./AuthHandler";
import { Form, Button } from 'react-bootstrap';

function LoginForm(props) {

    const [loginForm, setLoginForm] = useState({ username: '', password: ''});
    const [error, setError] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        setError("");
        AuthHandler.logout();
        props.logSet(false);
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

    function togglePassword(){
        setPasswordShown(!passwordShown);
    }
       
    return (
        <div className="container col-md-4 col-md-offset-4 border border-danger rounded">
            <Form className="mt-3 mb-3" onSubmit={onSubmit}>
                <Form.Group className="col-xs-2">
                    <Form.Label>Korisničko ime</Form.Label>
                    <Form.Control 
                        required
                        type="text"
                        name="username"
                        value={loginForm.username}
                        onChange={onChange}
                        placeholder="Korisničko ime"  
                    />
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Lozinka</Form.Label>
                    <Form.Control 
                        required
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        value={loginForm.password}
                        onChange={onChange}
                        placeholder="Lozinka"  
                    />
                </Form.Group>
                <Form.Check type="checkbox" label="Prikaži lozinku" onClick={() => togglePassword()}></Form.Check>
                <hr/>
                <Button className="btn-danger" type="submit">
                    Login
                </Button>
                <div>{error}</div>
            </Form>
        </div>
    )
}

export default LoginForm

