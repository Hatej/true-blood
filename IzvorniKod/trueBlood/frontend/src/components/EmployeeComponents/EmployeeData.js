import React from 'react';
import { useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import axios from "axios"
import AuthHandler from '../AuthHandler';

function EmployeeData(props) {

    //props.mode može biti "EMPLOYEE_ACCESSING_DATA" ili "ADMIN_ACCESSING_DATA" ili "ADMIN_ADDING_EMPLOYEE" //iako to ovdje možda ne treba jer ne postoje podaci djelatnika koja admin može mijenjati, a djelatnik ne
    //props.username
    const [employeeDataForm, setEmployeeDataForm] = React.useState({givenName:"", familyName:"", OIB:"", dateOfBirth:"", birthPlace:"",  residenceAdress:"f", privatePhoneNumber:"", workPhoneNumber:"", email:""});
    
    let targetUsername;

    useEffect( () => {
        switch(props.mode){
            case "EMPLOYEE_ACCESSING_DATA":
                targetUsername = AuthHandler.getLoggedInUserName();
                break;
            case "ADMIN_ACCESSING_DATA":
                targetUsername = props.username;
                break;
        }
        getEmployeeData();    
    }, []);

    const [oldEmployeeDataForm, setOldEmployeeDataForm] = React.useState(); //za cuvanje stare forme, iz nekog razloga ne radi kada samo napisem let oldMydataForm;
    const [error, setError] = React.useState("");
    const [editingMode, setEditingMode]= React.useState(false)
    const history = useHistory(); 

    function onSubmit() {
    
    }

    async function getEmployeeData(){
        let data = await axios.get(`http://localhost:8080/user/getUserInfo`, {
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
        setEmployeeDataForm(newForm);
    }

    function onChange(event) {

        if (editingMode) {
            const {name, value} = event.target;
            let newForm = { ... employeeDataForm };
            newForm[name] = value;
            setEmployeeDataForm(newForm);
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
        setOldEmployeeDataForm({ ... employeeDataForm})  //ovako se kopira objekt

    }

    function returnToOld() {
        setEditingMode(false)
        setEmployeeDataForm(oldEmployeeDataForm);
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
                            value={employeeDataForm.givenName}
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
                            value={employeeDataForm.familyName}
                            onChange={onChange}
                            placeholder="Last name"  
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>OIB</Form.Label>
                        <Form.Control 
                            readOnly={true}
                            type="text"
                            name="OIB"
                            disabled={props.mode === "EMPLOYEE_ACCESSING_DATA"}
                            value={employeeDataForm.OIB}
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
                            value={employeeDataForm.dateOfBirth}
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
                            value={employeeDataForm.birthPlace}
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
                            value={employeeDataForm.residenceAdress}
                            onChange={onChange} 
                            placeholder="Residence adress"
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
                            value={employeeDataForm.privatePhoneNumber}
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
                            value={employeeDataForm.workPhoneNumber}
                            onChange={onChange} 
                            placeholder="0123456789"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            readOnly={true}
                            type="email"
                            name="email"
                            value={employeeDataForm.email}
                            onChange={onChange}  
                            placeholder="email"
                        />
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

export default EmployeeData;