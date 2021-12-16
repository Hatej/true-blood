import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import {useHistory} from "react-router-dom";

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
                    history.push('/home');
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
        <div className="container col-md-4 col-md-offset-4 border border-danger rounded">
            <Form className="mt-3 mb-3" onSubmit={onSubmit}>
                <Row className="mb-2">
                    <Form.Group as={Col} md="6">
                        <Form.Label>First name</Form.Label>
                        <Form.Control 
                            required
                            type="text"
                            name="givenName"
                            value={signinForm.givenName}
                            onChange={onChange}
                            placeholder="First name"  
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control 
                            required
                            type="text"
                            name="familyName"
                            value={signinForm.familyName}
                            onChange={onChange}
                            placeholder="Last name"  
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>OIB</Form.Label>
                        <Form.Control 
                            required
                            type="text"
                            name="OIB"
                            value={signinForm.OIB}
                            onChange={onChange}
                            minLength="11"
                            maxLength="11"
                            placeholder="OIB"  
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control 
                            required
                            type="date"
                            name="dateOfBirth"
                            value={signinForm.dateOfBirth}
                            onChange={onChange}  
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Birth place</Form.Label>
                        <Form.Control 
                            required
                            type="text"
                            name="birthPlace"
                            value={signinForm.birthPlace}
                            onChange={onChange}  
                            placeholder="Birth place"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Residence address</Form.Label>
                        <Form.Control 
                            required
                            type="text"
                            name="residenceAdress"
                            value={signinForm.residenceAdress}
                            onChange={onChange} 
                            placeholder="Residence adress"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Form.Label>Place of employment</Form.Label>
                        <Form.Control 
                            type="text"
                            name="workplaceName"
                            value={signinForm.workplaceName}
                            onChange={onChange}  
                            placeholder="Place of employment"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Private phone number</Form.Label>
                        <Form.Control 
                            required
                            type="tel"
                            pattern="[0-9]{10}"
                            name="privatePhoneNumber"
                            value={signinForm.privatePhoneNumber}
                            onChange={onChange}  
                            placeholder="0123456789"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Official phone number</Form.Label>
                        <Form.Control 
                            type="tel"
                            pattern="[0-9]{10}"
                            name="workPhoneNumber"
                            value={signinForm.workPhoneNumber}
                            onChange={onChange} 
                            placeholder="0123456789"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            required
                            type="email"
                            name="email"
                            value={signinForm.email}
                            onChange={onChange}  
                            placeholder="Place of employment"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Blood type</Form.Label>
                        <Form.Select
                            name="bloodType"
                            onChange={onChange}
                            value={signinForm.bloodType}
                            required
                        >
                            <option value='A+'>A+</option>
                            <option value='A-'>A-</option>
                            <option value='B+'>B+</option>
                            <option value='B-'>B-</option>
                            <option value='O+'>O+</option>
                            <option value='O-'>O-</option>
                            <option value='AB+'>AB+</option>
                            <option value='AB-'>AB-</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Button className="btn-danger" type="submit">
                            Signup
                        </Button>
                        <div>{error}</div>
                    </Form.Group>
                </Row>
            </Form>
        </div>
    )
}

export default SignInForm

