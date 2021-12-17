import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import {useHistory} from "react-router-dom";

function MyData(props) {
    
    const [myDataForm, setMyDataForm] = React.useState(
        {givenName:"Josip", familyName:"Pardon", OIB:"232332", dateOfBirth:"2021-01-02", birthPlace:"sdsd", residenceAdress:"dfdfd", 
        workplaceName:"ffgfg", privatePhoneNumber:"dfdf", workPhoneNumber:"dfdf", email:"dfdf", bloodType:"A+"}
    );

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
            oib: myDataForm.OIB,
            address: myDataForm.residenceAdress,
            workplace: myDataForm.workplaceName,
            email: myDataForm.email,
            mobilePrivate: myDataForm.privatePhoneNumber,
            mobileBusiness: myDataForm.workPhoneNumber,
            birthdate: myDataForm.dateOfBirth,
            bloodTypeName: myDataForm.bloodType,
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
                            required
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
                            required
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
                    <Form.Group as={Col} md="6">
                        <Button hidden={!editingMode} className="btn-danger" type="submit">
                            Spremi promjene
                        </Button>
                        <Button hidden={editingMode} className="btn-danger" onClick={enterEditingMode}>
                            Edit
                        </Button>
                        <Button hidden={!editingMode} className="btn-danger" onClick={returnToOld}>
                            Poništi izmjene
                        </Button>
                        <div>{error}</div>
                    </Form.Group>
                </Row>
            </Form>
        </div>
    )
    
}

export default MyData;