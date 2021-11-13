import React from 'react';
import {useHistory} from "react-router-dom";
import "./SignInForm.css";


function SignInForm(props) {

    let givenNameText, familyNameText, birthYearText, residencePlaceText, phoneNumberText, emailText, passwordText, passwordRepeatedText, signinText, passwordsNotSameText, showPasswordText;
    if (props.language === "croatian") {
        givenNameText = "Ime"
        familyNameText = "Prezime"
        birthYearText = "Godina rođenja"
        residencePlaceText = "Mjesto prebivališta"
        phoneNumberText = "Broj mobitela"
        emailText = "Elektronička pošta"
        passwordText = "Lozinka"
        passwordRepeatedText = "Ponovi lozinku"
        signinText = "Registriraj se"
        passwordsNotSameText = "Lozinke se ne poklapaju"
        showPasswordText = "Prikaži lozinke"
    }
    if (props.language === "english") {
        givenNameText = "Name"
        familyNameText = "Family name"
        birthYearText = "Birth year"
        residencePlaceText = "Residence place"
        phoneNumberText = "Phone number"
        emailText = "email"
        passwordText = "Password"
        passwordRepeatedText = "Repeat password"
        passwordsNotSameText = "Passwords do not match"
        signinText = "Sign in"
        showPasswordText = "Show passwords"
    }


    const [signinForm, setSignInForm] = React.useState({givenName:'', familyName:'', birthYear:'', residencePlace:'', phoneNumber:'', email:'', password:'', passwordRepeated:''});
    const [error, setError] = React.useState('');
    const [passwordType, setPasswordType] = React.useState("password")
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        if (signinForm.password !== signinForm.passwordRepeated) {
            setError(passwordsNotSameText)
        } else {


            setError("")
        
            
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
    }

    function onChange(event) {
        const {name, value} = event.target;
        let newForm = {givenName: signinForm.givenName, familyName: signinForm.familyName, birthYear: signinForm.birthYear, residencePlace: signinForm.residencePlace, phoneNumber: signinForm.phoneNumber, email: signinForm.email, password: signinForm.password, passwordRepeated: signinForm.passwordRepeated};
        newForm[name] = value;
        
        setSignInForm(newForm);

        
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
                    <label>{givenNameText}</label>
                    <input name='givenName' onChange={onChange} value={signinForm.givenName} type="text" required/>
                </div>
                <div className="FormRow">
                    <label>{familyNameText}</label>
                    <input name='familyName' onChange={onChange} value={signinForm.familyName} type="text" required/>
                </div>
                <div className="FormRow">
                    <label>{birthYearText}</label>
                    <input name='birthYear' onChange={onChange} value={signinForm.birthYear} type="number" required/>
                </div>
                <div className="FormRow">
                    <label>{residencePlaceText}</label>
                    <input name='residencePlace' onChange={onChange} value={signinForm.residencePlace} type="text" required/>
                </div>
                <div className="FormRow">
                    <label>{phoneNumberText}</label>
                    <input name='phoneNumber' onChange={onChange} value={signinForm.phoneNumber} type="tel" pattern="[0-9]{10}" required/>
                </div>
                <div className="FormRow">
                    <label>{emailText}</label>
                    <input name='email' onChange={onChange} value={signinForm.email} type="email" required/>
                </div>
                <div className="FormRow">
                    <label>{passwordText}</label>
                    <input name='password' onChange={onChange} value={signinForm.password} type={passwordType} required/>
                </div>
                <div className="FormRow">
                    <label>{passwordRepeatedText}</label>
                    <input name='passwordRepeated' onChange={onChange} value={signinForm.passwordRepeated} type={passwordType} required/>
                </div>
                <div className="FormRow">
                    <label>{showPasswordText}</label>
                    <input name='showPassword' onClick={onClick} type="checkbox" checked={passwordType==="text"}/>
                </div>
                <div className='error'>{error}</div>
                <button type="submit">{signinText}</button>
            </form>
        </div>

    )
}

export default SignInForm

