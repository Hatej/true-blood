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

    const [users, setUsers] = useState([]);
    /*
        useEffect(() => {
            axios.get("http://localhost:8080/user", {withCredentials: true})
                .then()
                .catch(err => console.log(err));
        })
    
     */

    return (

        <div id="sveSkup">

            <div class="cijela">
                <div class="imeGrupe">A+</div>
                <div class="gornjaGranica" style={{ bottom: "200px" }}></div>
                <div class="donjaGranica" style={{ bottom: "100px" }}></div>
                <div class="epruveta"></div>
                <div class="fix"></div>
                <div class="kolicKrvi" style={{ height: "180px" }}></div>
            </div>
            <div class="cijela">
                <div class="imeGrupe">A+</div>
                <div class="gornjaGranica" style={{ bottom: "200px" }}></div>
                <div class="donjaGranica" style={{ bottom: "100px" }}></div>
                <div class="epruveta"></div>
                <div class="fix"></div>
                <div class="kolicKrvi" style={{ height: "250px" }}></div>
            </div>
            <div class="cijela">
                <div class="imeGrupe">A+</div>
                <div class="gornjaGranica" style={{ bottom: "200px" }}></div>
                <div class="donjaGranica" style={{ bottom: "100px" }}></div>
                <div class="epruveta"></div>
                <div class="fix"></div>
                <div class="kolicKrvi" style={{ height: "250px" }}></div>
            </div>
            <div class="cijela">
                <div class="imeGrupe">A+</div>
                <div class="gornjaGranica" style={{ bottom: "200px" }}></div>
                <div class="donjaGranica" style={{ bottom: "100px" }}></div>
                <div class="epruveta"></div>
                <div class="fix"></div>
                <div class="kolicKrvi" style={{ height: "250px" }}></div>
            </div>

            <div class="cijela">
                <div class="imeGrupe">A+</div>
                <div class="gornjaGranica" style={{ bottom: "200px" }}></div>
                <div class="donjaGranica" style={{ bottom: "100px" }}></div>
                <div class="epruveta"></div>
                <div class="fix"></div>
                <div class="kolicKrvi" style={{ height: "250px" }}></div>
            </div>
            <div class="cijela">
                <div class="imeGrupe">A+</div>
                <div class="gornjaGranica" style={{ bottom: "200px" }}></div>
                <div class="donjaGranica" style={{ bottom: "100px" }}></div>
                <div class="epruveta"></div>
                <div class="fix"></div>
                <div class="kolicKrvi" style={{ height: "250px" }}></div>
            </div>
            <div class="cijela">
                <div class="imeGrupe">A+</div>
                <div class="gornjaGranica" style={{ bottom: "200px" }}></div>
                <div class="donjaGranica" style={{ bottom: "100px" }}></div>
                <div class="epruveta"></div>
                <div class="fix"></div>
                <div class="kolicKrvi" style={{ height: "250px" }}></div>
            </div>
            <div class="cijela">
                <div class="imeGrupe">A+</div>
                <div class="gornjaGranica" style={{ bottom: "200px" }}></div>
                <div class="donjaGranica" style={{ bottom: "100px" }}></div>
                <div class="epruveta"></div>
                <div class="fix"></div>
                <div class="kolicKrvi" style={{ height: "250px" }}></div>
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
        /*<div>home
            {users.map(user => {
                return <pre>{JSON.stringify(user)}</pre>
            })}
        </div>*/
    )


}

export default Home;