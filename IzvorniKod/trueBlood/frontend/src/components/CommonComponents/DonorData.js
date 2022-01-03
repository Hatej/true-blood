import React from 'react';
import { useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import axios from "axios"
import AuthHandler from '../AuthHandler';
import {SPRING_URL} from '../Constants';

function DonorData(props) {

    //props.mode može biti "EMPLOYEE_ACCESSING_DATA" ili "DONOR_ACCESSING_DATA" ili "EMPLOYEE_ADDING_DONOR"   ; trebalo mi mozda dodati i mogucnost "DONOR_SIGNIN" da nemamo posebnu sign in formu
    //props.username => preko njega se šalje username, ako employee pregledava donora

    let targetUsername;

    switch (props.mode) {
        case "DONOR_ACCESSING_DATA":
            targetUsername = AuthHandler.getLoggedInUserName();
            break;
        case "EMPLOYEE_ACCESSING_DATA":
            targetUsername = props.username;
            break;
        default:
            break;
    }

    const [donorDataForm, setDonorDataForm] = React.useState({
        givenName: "", familyName: "", OIB: "", dateOfBirth: "", gender: "true", birthPlace: "", residenceAdress: "",
        workplaceName: "", privatePhoneNumber: "", workPhoneNumber: "", email: "", bloodType: "A+", isRejected: false
    });
/*
    React.useEffect(() => {
        if (props.mode === "EMPLOYEE_ACCESSING_DATA") {
            targetUsername = props.username;
            getDonorData();
        }
    }, [props.username])  //Valentin je rekao da je ovo nepreporuciljivo rjesenje, ali radi
*/
    const [oldDonorDataForm, setOldDonorDataForm] = React.useState(); //za cuvanje stare forme, iz nekog razloga ne radi kada samo napisem let oldDonorDataForm;


    async function getDonorData() {
        let data = await axios.get(SPRING_URL.concat('/user/getUserInfo'), {
            headers: {
                'username': targetUsername
            }
        }).then(res => res.data);
        var time = Date.parse(data.birthdate);
        console.log(time);
        var date = new Date(time);
        var dateFormat = date.getFullYear() + '-'
            + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
            + ('0' + date.getDate()).slice(-2);
        let newForm = {
            givenName: data.name, familyName: data.surname,
            OIB: data.oib, dateOfBirth: dateFormat, birthPlace: data.birthplace,
            residenceAdress: data.address, workplaceName: data.workplace,
            privatePhoneNumber: data.mobilePrivate, workPhoneNumber: data.mobileBusiness, email: data.email, bloodType: bloodName(data.bloodTypeName), isRejected: data.rejected, gender: data.genderMale,
        };
        setDonorDataForm(newForm);
    }

    useEffect(() => {
        if (!(props.mode === "EMPLOYEE_ADDING_DONOR")) {
            getDonorData();
        } else {
            setDonorDataForm({
                givenName: "", familyName: "", OIB: "", dateOfBirth: "", birthPlace: "", residenceAdress: "",
                workplaceName: "", privatePhoneNumber: "", workPhoneNumber: "", email: "", bloodType: "", donorID: undefined, isRejected: false
            })
        }
    }, []);


    const [error, setError] = React.useState("");
    const [editingMode, setEditingMode] = React.useState(false)
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        setError("")

        const data = {
            name: donorDataForm.givenName,
            surname: donorDataForm.familyName,
            genderMale: donorDataForm.gender,
            birthplace: donorDataForm.birthPlace,
            address: donorDataForm.residenceAdress,
            workplace: donorDataForm.workplaceName,
            mobilePrivate: donorDataForm.privatePhoneNumber,
            mobileBusiness: donorDataForm.workPhoneNumber,
            birthdate: donorDataForm.dateOfBirth,
            rejected: donorDataForm.isRejected,
        };

        const headers = {
            'username': targetUsername
        };

        return axios.post(SPRING_URL.concat('/user/editUserInfo'),
            data, {
            headers: headers
        }).then(res => {
                console.log(res);
                if (res.status === 200) {
                    setError("Changes saved!");
                    getDonorData();
                    setOldDonorDataForm({ ...donorDataForm });
                    setEditingMode(false);
                }
                if (res.status === 400) {
                    setError("Error on signup!");
                    history.push('/donor');
                }
            });
    }

    function onChange(event) {

        if (editingMode) {
            const { name, value } = event.target;
            let newForm = { ...donorDataForm };
            newForm[name] = value;

            setDonorDataForm(newForm);
        }

    }

    function bloodName(name){
        switch(name){
            case "A_PLUS":
                return "A+"
            case "AB_PLUS":
                return "AB+"
            case "B_PLUS":
                return "B+"
            case "ZERO_PLUS":
                return "O+"
            case "A_MINUS":
                return "A-"
            case "AB_MINUS":
                return "AB-"
            case "B_MINUS":
                return "B-"
            case "ZERO_MINUS":
                return "O-"       
            default:
                break;
        }
    }

    function enterEditingMode() {

        setEditingMode(true)
        setOldDonorDataForm({ ...donorDataForm })  //ovako se kopira objekt

    }

    function returnToOld() {
        setEditingMode(false)
        setDonorDataForm(oldDonorDataForm);
    }

    function returnDonateValue() {
        if (donorDataForm.isRejected) {
            return "Ne može"
        } else {
            return "Može"
        }
    }

    function returnGenderValue() {
        if (donorDataForm.gender) {
            return "M"
        } else {
            return "Ž"
        }
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
                            value={donorDataForm.givenName}
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
                            value={donorDataForm.familyName}
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
                            value={donorDataForm.OIB}
                            disabled={props.mode === "DONOR_ACCESSING_DATA"}
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
                            value={donorDataForm.dateOfBirth}
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
                            value={donorDataForm.birthPlace}
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
                            value={donorDataForm.residenceAdress}
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
                            value={donorDataForm.workplaceName}
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
                            value={donorDataForm.privatePhoneNumber}
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
                            value={donorDataForm.workPhoneNumber}
                            onChange={onChange}
                            placeholder="0123456789"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={donorDataForm.email}
                            onChange={onChange}
                            placeholder="Email Address"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Gender: </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="gender"
                            value={returnGenderValue()}
                            disabled={props.mode === "DONOR_ACCESSING_DATA"}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Blood type: </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="bloodType"
                            value={donorDataForm.bloodType}
                            disabled={props.mode === "DONOR_ACCESSING_DATA"}
                            onChange={onChange}
                            placeholder="Blood Type"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Mogućnost doniranja: </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="isRejected"
                            value={returnDonateValue()}
                            disabled={props.mode === "DONOR_ACCESSING_DATA"}
                            onChange={onChange}
                            placeholder="Donate Status"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-4">
                    <Form.Group as={Col} md="3" className="me-5">
                        <Button hidden={!editingMode} className="btn-danger" type="submit">
                            Spremi promjene
                        </Button>
                        <Button hidden={editingMode} className="btn-danger" onClick={enterEditingMode}>
                            Edit
                        </Button>
                        <span>{error}</span>
                    </Form.Group>
                    <Form.Group as={Col} md="2">
                        <Button hidden={!editingMode} className="btn-danger" onClick={returnToOld}>
                            Poništi izmjene
                        </Button>
                    </Form.Group>
                    {(() => {
                        if(props.mode === "EMPLOYEE_ACCESSING_DATA" || props.mode === "EMPLOYEE_ADDING_DONOR"){
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

export default DonorData;