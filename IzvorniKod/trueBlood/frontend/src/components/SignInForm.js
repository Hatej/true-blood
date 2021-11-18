import React from 'react';
import {useHistory} from "react-router-dom";
import "./SignInForm.css";


function SignInForm(props) {

    let givenNameText, familyNameText, oibText, dateOfBirthText, birthPlaceText, residencePlaceText, phoneNumberText, emailText, passwordText, passwordRepeatedText, signinText, passwordsNotSameText, showPasswordText, placeOfEmploymentText, privatePhoneNumberText, officialPhoneNumberText, bloodTypeText;
    if (props.language === "croatian") {
        givenNameText = "Ime"
        familyNameText = "Prezime"
        oibText = "OIB"
        dateOfBirthText = "Datum rođenja"
        birthPlaceText = "Mjesto rođenja"
        residencePlaceText = "Adresa stanovanja"
        phoneNumberText = "Broj mobitela"
        emailText = "Elektronička pošta"
        passwordText = "Lozinka"
        passwordRepeatedText = "Ponovi lozinku"
        signinText = "Registriraj se"
        passwordsNotSameText = "Lozinke se ne poklapaju"
        showPasswordText = "Prikaži lozinke"
        placeOfEmploymentText = "Mjesto zaposlenja (naziv firme)"
        privatePhoneNumberText = "Privatni telefonski broj"
        officialPhoneNumberText = "Službeni telefonski broj"
        bloodTypeText = "Tip krvi"

    }
    if (props.language === "english") {
        givenNameText = "Name"
        familyNameText = "Family name"
        oibText = "OIB"
        dateOfBirthText = "Date of birth"
        birthPlaceText = "Birth place"
        residencePlaceText = "Residence adress"
        phoneNumberText = "Phone number"
        emailText = "email"
        passwordText = "Password"
        passwordRepeatedText = "Repeat password"
        passwordsNotSameText = "Passwords do not match"
        signinText = "Sign in"
        showPasswordText = "Show passwords"
        placeOfEmploymentText = "Place of employment"
        privatePhoneNumberText = "Private phone number"
        officialPhoneNumberText = "Official phone number"
        bloodTypeText = "Blood type"
    }


    const [signinForm, setSignInForm] = React.useState({givenName:"", familyName:"", OIB:"", dateOfBirth:"", birthPlace:"", residenceAdress:"", 
                                                        workplaceName:"", privatePhoneNumber:"", workPhoneNumber:"", email:"", bloodType:"A+"});
    const [error, setError] = React.useState("");
    const [passwordType, setPasswordType] = React.useState("password")
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        setError("")
      
        const data = {
            name: signinForm.givenName,
            surname: signinForm.familyName,
            birthplace: signinForm.birthPlace,
            oib: signinForm.OIB,
            address: signinForm.residenceAdress,
            workplace: signinForm.workplaceName,
            email: signinForm.email,
            mobilePrivate: signinForm.privatePhoneNumber,
            mobileBusiness: signinForm.workPhoneNumber,
            birthdate: signinForm.dateOfBirth,
            bloodTypeName: signinForm.bloodType,
        };

        console.log(data);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        setError("");
        return fetch('http://localhost:8080/user/add', options)
            .then(response => {
                if(response.ok){
                    history.push('/login');
                }
                if(response.status === 400){
                    setError("Error on signup!");
                    history.push('/signin');
                }
            });
    }

    function onChange(event) {
        const {name, value} = event.target;
        let newForm = {givenName: signinForm.givenName, familyName: signinForm.familyName, 
                       OIB: signinForm.OIB, dateOfBirth: signinForm.dateOfBirth, birthPlace: signinForm.birthPlace,
                       residenceAdress: signinForm.residenceAdress, workplaceName: signinForm.workplaceName,
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
                    <label>{oibText}</label>
                    <input name='OIB' onChange={onChange} value={signinForm.OIB} type="text" minLength="11" maxLength="11" required/>
                </div>
                <div className="FormRow">
                    <label>{dateOfBirthText}</label>
                    <input name='dateOfBirth' onChange={onChange} value={signinForm.dateOfBirth} type="date" required/>
                </div>
                <div className="FormRow">
                    <label>{birthPlaceText}</label>
                    <input name='birthPlace' onChange={onChange} value={signinForm.birthPlace} type="text" required/>
                </div>
                <div className="FormRow">
                    <label>{residencePlaceText}</label>
                    <input name='residenceAdress' onChange={onChange} value={signinForm.residenceAdress} type="text" required/>
                </div>
                <div className="FormRow">
                    <label>{placeOfEmploymentText}</label>
                    <input name='workplaceName' onChange={onChange} value={signinForm.workplaceName} type="text"/>
                </div>
                <div className="FormRow">
                    <label>{privatePhoneNumberText}</label>
                    <input name='privatePhoneNumber' onChange={onChange} value={signinForm.privatePhoneNumber} type="tel" pattern="[0-9]{10}" required/>
                </div>
                <div className="FormRow">
                    <label>{officialPhoneNumberText}</label>
                    <input name='workPhoneNumber' onChange={onChange} value={signinForm.workPhoneNumber} type="tel" pattern="[0-9]{10}"/>
                </div>
                <div className="FormRow">
                    <label>{emailText}</label>
                    <input name='email' onChange={onChange} value={signinForm.email} type="email" required/>
                </div>
                <div className="FormRow">
                    <label>{bloodTypeText}</label>
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

