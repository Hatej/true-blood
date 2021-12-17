import React from 'react';
import { useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import axios from "axios"
import AuthHandler from '../AuthHandler';

function MyData(props) {
    
    const [myDataForm, setMyDataForm] = React.useState(
        {givenName:"", familyName:"", OIB:"", dateOfBirth:"", birthPlace:"", residenceAdress:"", 
        workplaceName:"", privatePhoneNumber:"", workPhoneNumber:"", email:"", bloodType:""}
    );

    async function getMyData() {
        let data = await axios.get(`http://localhost:8080/user/getUserInfo`, {
            headers: {
                'username':AuthHandler.getLoggedInUserName()
            }
        }).then(res => res.data);
        var time = Date.parse(data.birthdate);
        console.log(time);
        var date = new Date(time);
        var dateFormat =    date.getFullYear() + '-'
                            + ('0' + (date.getMonth()+1)).slice(-2) + '-'
                            + ('0' + date.getDate()).slice(-2);
        let newForm = {givenName: data.name, familyName: data.surname, 
                        OIB: data.oib, dateOfBirth: dateFormat, birthPlace: data.birthplace,
                        residenceAdress: data.address, workplaceName: data.workplace,
                        privatePhoneNumber: data.mobilePrivate, workPhoneNumber: data.mobileBusiness, email: data.email, bloodType: bloodName(data.bloodTypeName)};
        setMyDataForm(newForm);
    }

    useEffect(() => {
        getMyData();
    }, []);


    const [oldMyDataForm, setOldMyDataForm] = React.useState(); //za cuvanje stare forme, iz nekog razloga ne radi kada samo napisem let oldMydataForm;
    const [error, setError] = React.useState("");
    const [editingMode, setEditingMode]= React.useState(false)
    const history = useHistory(); 

    function onSubmit(e) {
        e.preventDefault();
        setError("")
      
        const data = {
            name: myDataForm.givenName,
            surname: myDataForm.familyName,
            birthplace: myDataForm.birthPlace,
            address: myDataForm.residenceAdress,
            workplace: myDataForm.workplaceName,
            mobilePrivate: myDataForm.privatePhoneNumber,
            mobileBusiness: myDataForm.workPhoneNumber,
            birthdate: myDataForm.dateOfBirth,
        };

        const headers = {
            'username':AuthHandler.getLoggedInUserName()
        };

        return axios.post('http://localhost:8080/user/editUserInfo',
                data, {
                    headers:headers
                })
                .then(res => {
                    console.log(res);
                    if(res.status == 200){
                        setError("Changes saved!");
                        getMyData();
                        setOldMyDataForm({ ... myDataForm});
                        setEditingMode(false);
                    } 
                    if(res.status === 400){
                        setError("Error on signup!");
                        history.push('/donor');
                    }
            });
    }

    function onChange(event) {

        if (editingMode) {
            const {name, value} = event.target;
            let newForm = {givenName: myDataForm.givenName, familyName: myDataForm.familyName, 
                        OIB: myDataForm.OIB, dateOfBirth: myDataForm.dateOfBirth, birthPlace: myDataForm.birthPlace,
                        residenceAdress: myDataForm.residenceAdress, workplaceName: myDataForm.workplaceName,
                        privatePhoneNumber: myDataForm.privatePhoneNumber, workPhoneNumber: myDataForm.workPhoneNumber, email: myDataForm.email, bloodType: myDataForm.bloodType};
            newForm[name] = value;
            
            setMyDataForm(newForm);
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
                return "AB+"
            case "B_MINUS":
                return "B+"
            case "ZERO_MINUS":
                return "O+"       
            default:
                break;
        }
    }

    function enterEditingMode() {
        setEditingMode(true)
        setOldMyDataForm({ ... myDataForm})  //ovako se kopira objekt
    }

    function returnToOld() {
        setEditingMode(false)
        setMyDataForm(oldMyDataForm);
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
                            value={myDataForm.givenName}
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
                            value={myDataForm.familyName}
                            onChange={onChange}
                            placeholder="Last name"  
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>OIB</Form.Label>
                        <Form.Control 
                            readonly="true"
                            type="text"
                            name="OIB"
                            value={myDataForm.OIB}
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
                            value={myDataForm.dateOfBirth}
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
                            value={myDataForm.birthPlace}
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
                            value={myDataForm.residenceAdress}
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
                            value={myDataForm.workplaceName}
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
                            value={myDataForm.privatePhoneNumber}
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
                            value={myDataForm.workPhoneNumber}
                            onChange={onChange} 
                            placeholder="0123456789"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            readonly="true"
                            type="email"
                            name="email"
                            value={myDataForm.email}
                            onChange={onChange}  
                            placeholder="Place of employment"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Blood type: <b>{myDataForm.bloodType}</b></Form.Label>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
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
                </Row>
            </Form>
        </div>
    )
    
}

export default MyData;