import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from "react-router-dom";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

import epruveta from './epruveta.gif';
import krvSlika from './krvSlika.gif';
import logo from './logo.png';

function Home(props) {

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
        if(amount < lower){
            return "50px";
        } else if(amount == lower){
            return "100px";
        } else if(amount == upper){
            return "200px";
        } else if(amount > lower && amount < upper){
            return "250px";
        } else {
            return "280px";
        }
    }

    return (
        <div>
        <div id="sveSkup">
            {bloodData.map(blood => {
                return (
                    <div className="cijela" key={blood.name}>
                        <div className="imeGrupe">{bloodName(blood.name)}</div>
                        <div className="gornjaGranica" style={{ bottom: "200px" }}></div>
                        <div className="donjaGranica" style={{ bottom: "100px" }}></div>
                        <div className="epruveta"></div>
                        <div className="fix"></div>
                        <div className="kolicKrvi" style={{ height: bloodHeight() }}></div>
                    </div>
                )
            })}
        </div>
        </div>


        /*<Container>
            <Row className="justify-content-md-center">
                <Col md={2}>4</Col>


                <Col md={4} className="sopar">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md={3} >
                                <div >
                                    <img src={krvSlika} className="krv"></img>

                                </div>
                                <div >
                                    <img src={epruveta} className="epruveta"></img>
                                </div>
                                vrsta
                            </Col>
                            <Col md={3} >
                                <div>
                                    <Image src={krvSlika} className="krv"></Image>
                                    <Image src={epruveta} className="epruveta"></Image>
                                    
                                </div>
                                vrsta
                            </Col>
                            <Col md={3} >
                                <div>
                                    <Image src={krvSlika} className="krv"></Image>
                                    <Image src={epruveta} className="epruveta"></Image>
                                </div>
                                vrsta
                            </Col>
                            <Col md={3} >
                                <div >
                                    <Image src={krvSlika} className="krv"></Image>
                                    <Image src={epruveta} className="epruveta"></Image>
                                </div>
                                vrsta
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col md={4} className="sopar">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md={3} >
                                <div >
                                    <img src={krvSlika} className="krv"></img>

                                </div>
                                <div >
                                    <img src={epruveta} className="epruveta"></img>
                                </div>
                                vrsta
                            </Col>
                            <Col md={3} >
                                <div>
                                    <Image src={krvSlika} className="krv"></Image>
                                    <Image src={epruveta} className="epruveta"></Image>
                                </div>
                                vrsta
                            </Col>
                            <Col md={3} >
                                <div>
                                    <Image src={krvSlika} className="krv"></Image>
                                    <Image src={epruveta} className="epruveta"></Image>
                                </div>
                                vrsta
                            </Col>
                            <Col md={3} >
                                <div>
                                    <Image src={krvSlika} className="krv"></Image>
                                    <Image src={epruveta} className="epruveta"></Image>
                                </div>
                                vrsta
                            </Col>
                        </Row>
                    </Container>
                </Col>

            </Row>
        </Container>*/
    )


}

export default Home;