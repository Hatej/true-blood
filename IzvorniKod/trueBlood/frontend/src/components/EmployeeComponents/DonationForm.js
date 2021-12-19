import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import {useHistory} from "react-router-dom";

function DonationForm(props) {

    const [donorDataForm, setDonorDataForm] = React.useState(props.donorData);
    
    React.useEffect( () => {
        setDonorDataForm(props.donorData)
    }, [props.donorData])  //Valentin je rekao da je ovo nepreproruciljivo rjesenje, ali radi

    const [donationDetails, setDonationDetails] = React.useState("");

    function onChangeDonationDetails(event) {
        setDonationDetails(event.target.value)
    }

    function onChange(event) {

        
        const {name, value} = event.target;
        let newForm = { ... donorDataForm };
        newForm[name] = value;
        
        setDonorDataForm(newForm);
        

    }

    function onSubmit() {

    }

    return (
        <div>
            <div className="container col-md-4 col-md-offset-4 border border-danger rounded">
                <Form className="mt-3 mb-3" onSubmit={onSubmit}>
                    <Row className="mb-2">
                        <Form.Group as={Col} md="6">
                            <Form.Label>First name</Form.Label>
                            <Form.Control 
                
                                type="text"
                                name="givenName"
                                value={donorDataForm.givenName}
                                disabled
                                

                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control 
                                
                                type="text"
                                name="familyName"
                                value={donorDataForm.familyName}
                                disabled
                            
                       
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-2">
                        <Form.Group as={Col} md="6">
                            <Form.Label>OIB: </Form.Label>
                            <Form.Control 
                
                                type="text"
                                name="OIB"
                                value={donorDataForm.OIB}
                                disabled
                                

                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Krvna grupa: </Form.Label>
                            <Form.Control 
                                
                                disabled
                                type="text"
                                name="bloodType"
                                value={donorDataForm.bloodType}
                       
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12">
                            <Form.Label>Detalji: </Form.Label>
                            <Form.Control 
                                type="text"
                                name="details"
                                value={donationDetails}
                                onChange={onChangeDonationDetails}  
                                placeholder="Upiši neke dodatne detalje"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Button className="btn-danger" type="submit">
                            Evidentiraj donaciju
                        </Button>
                    </Form.Group>
                </Row>
                  
                </Form>
            </div>
        </div>
    )
}

export default DonationForm

