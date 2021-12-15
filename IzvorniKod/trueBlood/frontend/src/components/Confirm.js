import React from 'react';
import {useHistory} from "react-router-dom";
import "./SignInForm.css";
import axios from 'axios';

function Confirm(props) {

    const [passwordForm, setPasswordForm] = React.useState({password: ""});
    const [error, setError] = React.useState("");
    const [passwordType, setPasswordType] = React.useState("password");
    const history = useHistory();

    let code = (new URLSearchParams(window.location.search)).get('code');

    function onSubmit(e) {
        e.preventDefault();
        setError("");
        axios
            .get(`http://localhost:8080/user/add/confirm`,
                { headers: { code: code, password: passwordForm.password } })
            .then(() => {
                history.push('/login');
            }).catch(() => {
            setError("Login failed!");
        });
    }

    function onChange(event) {
        const {name, value} = event.target;
        let newForm = {password:passwordForm.password};
        newForm[name] = value;
        setPasswordForm(newForm);
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
                    <label>Password</label>
                    <input name='password' type={passwordType} onChange={onChange} value={passwordForm.password} required/>
                </div>
                <div className="FormRow">
                    <label>Show password</label>
                    <input name='showPassword' onClick={onClick} type="checkbox" checked={passwordType==="text"}/>
                </div>
                <div className='error'>{error}</div>
                <button type="submit">Set password</button>
            </form>
        </div>
    )
}

export default Confirm