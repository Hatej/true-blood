import React from 'react';
import {useHistory} from "react-router-dom";
import "./SignInForm.css";


function SignInForm(props) {

    let givenNameText, familyNameText, birthYearText, residencePlaceText, phoneNumberText, emailText, passwordText, passwordRepeatedText, signinText, passwordsNotSameText, showPasswordText;
    if (props.language === "croatian") {
        givenNameText = "Ime"
        familyNameText = "Prezime"
        birthYearText = "Datum rođenja"
        residencePlaceText = "Adresa stanovanja"
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
        birthYearText = "Date of birth"
        residencePlaceText = "Residence adress"
        phoneNumberText = "Phone number"
        emailText = "email"
        passwordText = "Password"
        passwordRepeatedText = "Repeat password"
        passwordsNotSameText = "Passwords do not match"
        signinText = "Sign in"
        showPasswordText = "Show passwords"
    }


    const [signinForm, setSignInForm] = React.useState({givenName:"", familyName:"", OIB:"", dateOfBirth:"", birthPlace:"", residenceAdress:"", 
                                                        workplaceName:"", privatePhoneNumber:"", workPhoneNumber:"", email:"", bloodType:"A+"});
    const [error, setError] = React.useState('');
    const [passwordType, setPasswordType] = React.useState("password")
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        setError("")
      
        const data = {
            ime: signinForm.givenName,
            prezime: signinForm.familyName,
            OIB: signinForm.OIB,
            datumRod: signinForm.dateOfBirth,
            mjestoRod: signinForm.birthPlace,
            adresaStanovanja: signinForm.residenceAdress,
            mjestoZaposlenja: signinForm.workplaceName,
            telPrivatni: signinForm.privatePhoneNumber,
            telPoslovni: signinForm.workPhoneNumber,
            email: signinForm.email,
            tipKrvi: signinForm.bloodType
        };

        console.log(data);

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
        let newForm = {givenName: signinForm.givenName, familyName: signinForm.familyName, 
                       OIB: signinForm.OIB, dateOfBirth: signinForm.dateOfBirth, birthPlace: signinForm.birthPlace,
                       residencePlace: signinForm.residenceAdress, workplaceName: signinForm.workplaceName, 
                       privatePhoneNumber: signinForm.privatePhoneNumber, workPhoneNumber: signinForm.workPhoneNumber, email: signinForm.email, bloodType: signinForm.bloodType};
        newForm[name] = value;
        
        setSignInForm(newForm);

        
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
                    <label>OIB</label>
                    <input name='OIB' onChange={onChange} value={signinForm.OIB} type="text" minLength="11" maxLength="11" required/>
                </div>
                <div className="FormRow">
                    <label>{birthYearText}</label>
                    <input name='dateOfBirth' onChange={onChange} value={signinForm.dateOfBirth} type="date" required/>
                </div>
                <div className="FormRow">
                    <label>Mjesto rođenja</label>
                    <input name='birthPlace' onChange={onChange} value={signinForm.birthPlace} type="text" required/>
                </div>
                <div className="FormRow">
                    <label>{residencePlaceText}</label>
                    <input name='residencePlace' onChange={onChange} value={signinForm.residenceAdress} type="text" required/>
                </div>
                <div className="FormRow">
                    <label>Mjesto zaposlenja (naziv firme)</label>
                    <input name='workplaceName' onChange={onChange} value={signinForm.workplaceName} type="text"/>
                </div>
                <div className="FormRow">
                    <label>Kontank telefon privatni</label>
                    <input name='privatePhoneNumber' onChange={onChange} value={signinForm.privatePhoneNumber} type="tel" pattern="[0-9]{10}" required/>
                </div>
                <div className="FormRow">
                    <label>Kontakt telefon na poslu</label>
                    <input name='workPhoneNumber' onChange={onChange} value={signinForm.workPhoneNumber} type="tel" pattern="[0-9]{10}"/>
                </div>
                <div className="FormRow">
                    <label>{emailText}</label>
                    <input name='email' onChange={onChange} value={signinForm.email} type="email" required/>
                </div>
                <div className="FormRow">
                    <label>Tip krvi</label>
                    <select name='bloodType' onChange={onChange} value={signinForm.bloodType} required>
                        <option value='A+' selected>A+</option>
                        <option value='A-'>A-</option>
                        <option value='B+'>B+</option>
                        <option value='B-'>B-</option>
                        <option value='O+'>O+</option>
                        <option value='O-'>O-</option>
                        <option value='AB+'>AB+</option>
                        <option value='AB-'>AB-</option>
                    </select>
                </div>
                <hr/>
                <div className='error'>{error}</div>
                <button type="submit">{signinText}</button>
            </form>
        </div>

    )
}

export default SignInForm

