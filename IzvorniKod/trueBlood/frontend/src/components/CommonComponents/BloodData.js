import { useEffect, useState } from 'react';
import axios from "axios"
import "../Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';

function BloodData(props){

    const [bloodData, setBloodData] = useState([]);

    useEffect(() => {
        async function getBloodData() {
            let data = await axios.get(`http://localhost:8080/bloodGroups`).then(res => res.data);
            setBloodData(data);
        }

        getBloodData();
    }, []);

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

    function bloodHeight(amount, upper, lower){
        console.log(amount + " " + upper + " " + lower);
        if(amount < lower){
            return "50px";
        } else if(amount == lower){
            return "100px";
        } else if(amount == upper){
            return "200px";
        } else if(amount > lower && amount < upper){
            return "150px";
        } else {
            return "280px";
        }
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div id="sveSkup" className="col-6 ps-3 border border-danger border-end-0 rounded-start">
                    {bloodData.map(blood => {
                        return (
                            <div className="cijela" key={blood.id}>
                                <div className="imeGrupe">{bloodName(blood.name)}</div>
                                <div className="gornjaGranica" style={{ bottom: "200px" }}></div>
                                <div className="donjaGranica" style={{ bottom: "100px" }}></div>
                                <div className="epruveta"></div>
                                <div className="fix"></div>
                                <div className="kolicKrvi" style={{ height: bloodHeight(blood.supply, blood.upperbound, blood.lowerbound) }}></div>
                            </div>
                        )
                    })}
                </div>
                <Accordion className="col-2 border border-danger border-start-0 rounded-end pe-0">
                        {bloodData.map(blood => {
                            return (
                            <Accordion.Item key={blood.id} eventKey={blood.id}>
                                <Accordion.Header>
                                    {bloodName(blood.name)}
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>Name: {bloodName(blood.name)}</p>
                                    <p>Amount: {blood.supply}</p>
                                    <p>Upper bound: {blood.upperbound}</p>
                                    <p>Lower bound: {blood.lowerbound}</p>
                                </Accordion.Body>
                            </Accordion.Item>  
                            )
                        })}
                </Accordion>
            </div>
        </div>
    )

}

export default BloodData;