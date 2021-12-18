import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import {useHistory} from "react-router-dom";

function DonorData(props) {

    //props.mode može biti "EMPLOYEE_ACCESSING_DATA" ili "DONOR_ACCESSING_DATA"    ; trebalo mi mozda dodati i mogucnost "DONOR_SIGNIN" da nemamo posebnu sign in formu
    //props.donorData
    const [donorDataForm, setDonorDataForm] = React.useState(props.donorData);
    
    React.useEffect( () => {
        setDonorDataForm(props.donorData)
    }, [props.donorData])  //Valentin je rekao da je ovo nepreproruciljivo rjesenje, ali radi

    const [oldDonorDataForm, setOldDonorDataForm] = React.useState(); //za cuvanje stare forme, iz nekog razloga ne radi kada samo napisem let oldMydataForm;
    const [error, setError] = React.useState("");
    const [editingMode, setEditingMode]= React.useState(false)
    const history = useHistory(); 

    function onSubmit(e) {
        e.preventDefault();
        setError("")
      
        const data = {
            name: donorDataForm.givenName,
            surname: donorDataForm.familyName,
            birthplace: donorDataForm.birthPlace,
            oib: donorDataForm.OIB,
            address: donorDataForm.residenceAdress,
            workplace: donorDataForm.workplaceName,
            email: donorDataForm.email,
            mobilePrivate: donorDataForm.privatePhoneNumber,
            mobileBusiness: donorDataForm.workPhoneNumber,
            birthdate: donorDataForm.dateOfBirth,
            bloodTypeName: donorDataForm.bloodType,
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
            let newForm = { ... donorDataForm };
            newForm[name] = value;
            
            setDonorDataForm(newForm);
        }

    }

    function enterEditingMode() {
        setEditingMode(true)
        setOldDonorDataForm({ ... donorDataForm})  //ovako se kopira objekt

    }

    function returnToOld() {
        setEditingMode(false)
        setDonorDataForm(oldDonorDataForm);
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
                            required
                            type="email"
                            name="email"
                            value={donorDataForm.email}
                            onChange={onChange}  
                            placeholder="Place of employment"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Blood type: </Form.Label>
                        <Form.Select
                            name="bloodType"
                            onChange={onChange}
                            value={donorDataForm.bloodType}
                            disabled={props.mode === "DONOR_ACCESSING_DATA"}
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
                        <Form.Label>Mogućnost doniranja: </Form.Label>
                        <Form.Select
                            name="ableToDonate"
                            onChange={onChange}
                            value={donorDataForm.ableToDonate}
                            disabled={props.mode === "DONOR_ACCESSING_DATA"}
                        >
                            <option value='able'>Može</option>
                            <option value='unable'>Ne može</option>
                        
                        </Form.Select>
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

export default DonorData;