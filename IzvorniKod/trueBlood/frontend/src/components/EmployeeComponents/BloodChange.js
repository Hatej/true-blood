import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Form, Row, Col, Button} from 'react-bootstrap';

function BloodChange(props) {

    const [bloodData, setBloodData] = useState([]);
    const [error, setError] = useState("");
    const [bloodChange, setBloodChange] = useState({});
    const [bloodToSend, setBloodToSend] = useState({bloodTypeName: "", amount: 0});

    useEffect(() => {
        async function getBloodData() {
            let data = await axios.get('http://localhost:8080/bloodGroups').then(res => res.data);
            setBloodData(data);
            setBloodChange(data[0]);
        }
        getBloodData();
    }, []);

    function onSubmit() {

    }

    function onChange(event) { 
        const { name, value } = event.target;        
        setBloodToSend({
            [name]: value
        });
        if(name === "bloodTypeName"){
            var result = bloodData.find(blood => {
                return bloodName(blood.name) === value; 
            })
            setBloodChange(result);
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
                return "0+"
            case "A_MINUS":
                return "A-"
            case "AB_MINUS":
                return "AB-"
            case "B_MINUS":
                return "B-"
            case "ZERO_MINUS":
                return "0-"       
            default:
                break;
        }
    }

    function subtract(one, two){
        return Number(one) - Number(two);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="container col-md-3 border border-danger rounded">
                    <Form className="mt-3 mb-3" onSubmit={onSubmit}>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="6">
                                <Form.Label>Vrsta krvi</Form.Label>
                                <Form.Select
                                    name="bloodTypeName"
                                    onChange={onChange}
                                    value={bloodChange.bloodTypeName}
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
                        <Row className="mb-2">
                            <Form.Group as={Col} md="6">
                                <Form.Label>Količina</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="amount"
                                    value={bloodChange.amount}
                                    onChange={onChange}
                                    placeholder="Količina"
                                />
                            </Form.Group>
                        </Row>  
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <Button className="btn-danger" type="submit">
                                    Evidentiraj promjenu
                                </Button>
                                <div>{error}</div>
                            </Form.Group>
                        </Row>
                    </Form>
                </div>
                <div className="col">
                    <p>Krv: {bloodName(bloodChange.name)}</p>
                    <p>Trenutna zaliha: {bloodChange.supply}</p>
                    <p>Nakon slanja: {}</p>
                </div>
            </div>
        </div>
    )
}

export default BloodChange;