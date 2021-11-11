import React from 'react';
import {useHistory} from "react-router-dom";
import "./SignInForm.css";


function SignInForm(props) {

    const [signinForm, setSignInForm] = React.useState({givenName:'', familyName:'', birthYear:'', residencePlace:'', phoneNumber:'', email:'', password:''});
    const [error, setError] = React.useState('');
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        const data = {
            ime: signinForm.givenName,
            prezime: signinForm.familyName,
            godinaRod: signinForm.birthYear,
            mjestoStan: signinForm.residencePlace,
            phoneNumber: signinForm.phoneNumber,
            email: signinForm.email,
            password: signinForm.password
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'appication/json'
            },
            body: JSON.stringify(data)
        };
        setError("");
        return fetch('/signin', options)
            .then(response => {
                if(response.ok){
                    history.push('/login');
                }
                // privremeno da baci na login, makar još POST ne radi
                if(response.status === 404){
                    history.push('/login');
                }
            });
    }

    function onChange(event) {
        const {name, value} = event.target;
        let newForm = {givenName: signinForm.givenName, familyName: signinForm.familyName, birthYear: signinForm.birthYear, residencePlace: signinForm.residencePlace, phoneNumber: signinForm.phoneNumber, email: signinForm.email, password: signinForm.password};
        newForm[name] = value;
        setSignInForm(newForm);
    }   

    return (
        <div className="SignupLoginForm">
            <form onSubmit={onSubmit}>
                <div className="FormRow">
                    <label>Ime</label>
                    <input name='givenName' onChange={onChange} value={signinForm.givenName} type="text" required/>
                </div>
                <div className="FormRow">
                    <label>Prezime</label>
                    <input name='familyName' onChange={onChange} value={signinForm.familyName} type="text" required/>
                </div>
                <div className="FormRow">
                    <label>Godina rođenja</label>
                    <input name='birthYear' onChange={onChange} value={signinForm.birthYear} type="number" required/>
                </div>
                <div className="FormRow">
                    <label>Mjesto stanovanja</label>
                    <input name='residencePlace' onChange={onChange} value={signinForm.residencePlace} type="text" required/>
                </div>
                <div className="FormRow">
                    <label>Telefon</label>
                    <input name='phoneNumber' onChange={onChange} value={signinForm.phoneNumber} type="tel" pattern="[0-9]{10}" required/>
                </div>
                <div className="FormRow">
                    <label>Email</label>
                    <input name='email' onChange={onChange} value={signinForm.email} type="email" required/>
                </div>
                <div className="FormRow">
                    <label>Password</label>
                    <input name='password' onChange={onChange} value={signinForm.password} type="password" required/>
                </div>
                <div className='error'>{error}</div>
                <button type="submit">Sign in</button>
            </form>
        </div>

    )
}

export default SignInForm

