import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import {SPRING_URL} from './Constants';

function SignInForm(props) {

    const [signinForm, setSignInForm] = React.useState({
        givenName: "", familyName: "", OIB: "", dateOfBirth: "", birthPlace: "", residenceAdress: "",
        workplaceName: "", privatePhoneNumber: "", workPhoneNumber: "", email: "", gender: "true", bloodTypeName: "A+"
    });
    const [error, setError] = React.useState("");
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        setError("")

        const data = {
            name: signinForm.givenName,
            surname: signinForm.familyName,
            genderMale: signinForm.gender,
            birthplace: signinForm.birthPlace,
            oib: signinForm.OIB,
            address: signinForm.residenceAdress,
            workplace: signinForm.workplaceName,
            email: signinForm.email,
            mobilePrivate: signinForm.privatePhoneNumber,
            mobileBusiness: signinForm.workPhoneNumber,
            birthdate: signinForm.dateOfBirth,
            bloodTypeName: signinForm.bloodTypeName,

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
        let endPoint = SPRING_URL.concat('/user');
        if(props.mode === "ADDING_EMPLOYEE"){
            endPoint = endPoint.concat('/addDjelatnik');
        } else {
            endPoint = endPoint.concat('/add');
        }
        return fetch(endPoint, options)
            .then(response => {
                if (response.ok) {
                    (() => {
                        if(props.mode === "ADDING_DONOR"){
                            props.setView("NORMAL");
                            alert("Donor dodan!");
                        } else if(props.mode === "ADDING_EMPLOYEE") {
                            props.setView("NORMAL");
                            alert("Djelatnik dodan!");
                        }    else {
                            history.push('/home');
                        }
                    })()
                }
                if (response.status === 400) {
                    console.log(response);
                    alert("Greška u stvaranja računa!")
                }
            });
    }

    function onChange(event) {
        const { name, value } = event.target;
        let newForm = {
            givenName: signinForm.givenName, familyName: signinForm.familyName,
            OIB: signinForm.OIB, dateOfBirth: signinForm.dateOfBirth, birthPlace: signinForm.birthPlace,
            residenceAdress: signinForm.residenceAdress, workplaceName: signinForm.workplaceName,
            privatePhoneNumber: signinForm.privatePhoneNumber, workPhoneNumber: signinForm.workPhoneNumber, email: signinForm.email, gender: signinForm.gender, bloodTypeName: signinForm.bloodTypeName
        };
        newForm[name] = value;

        setSignInForm(newForm);


    }

    return (

        <div className="container col-md-6 col-md-offset-2 border border-danger rounded">
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
                            placeholder="E-mail"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>spol</Form.Label>
                        <Form.Select
                            name="gender"
                            onChange={onChange}
                            value={signinForm.gender}
                            required
                        >
                            <option value='true'>M</option>
                            <option value='false'>Ž</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Blood type</Form.Label>
                        <Form.Select
                            name="bloodTypeName"
                            onChange={onChange}
                            value={signinForm.bloodTypeName}
                            required
                        >
                            <option value='A+'>A+</option>
                            <option value='A-'>A-</option>
                            <option value='B+'>B+</option>
                            <option value='B-'>B-</option>
                            <option value='0+'>0+</option>
                            <option value='0-'>0-</option>
                            <option value='AB+'>AB+</option>
                            <option value='AB-'>AB-</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Button className="btn-danger mb-1" type="submit">
                            Registriraj
                        </Button>
                        <div>{error}</div>
                    </Form.Group>
                    {(() => {
                        if(props.mode === "ADDING_DONOR" || props.mode === "ADDING_EMPLOYEE"){
                            return (
                                <Form.Group as={Col} md="4">
                                    <Button className="btn-danger" onClick={() => props.setView("NORMAL")}>
                                        Vrati se nazad
                                    </Button>
                                </Form.Group>
                            );
                        }
                    })()}
                </Row>
            </Form>
        </div>
    )
}

export default SignInForm

