import React from 'react';
import {useHistory} from "react-router-dom";
import AuthHandler from "./AuthHandler";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Donor.css';
import MyData from "./CommonComponents/MyData";
import DonationHistory from "./DonorComponents/DonationHistory";
import Messages from "./DonorComponents/Messages";
import { Tab, Row, Col, Nav, Sonnet } from 'react-bootstrap';

function Donor(props) {

    return(
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col className="col-1">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="red" >
                                <Nav.Link eventKey="first">Moji podaci</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Povijest donacija</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Poruke</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col className="col-10">
                        <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <MyData/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <DonationHistory/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Messages/>
                                </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </div>

       

    )

    /*
    <div>
                <button onClick={() => setView("myData")}>Moji podaci</button>
                <button onClick={() => setView("donationHistory")}>Povijest donacija</button>
                <button onClick={() => setView("Messages")}>Poruke</button>
                Kratki info
            </div>

            <div hidden={!(view==="myData")}>
                <MyData/>

            </div>

            <div hidden={!(view==="donationHistory")}>
                <DonationHistory/>
            </div>

            <div hidden={!(view==="Messages")}>
                <Messages/>
            </div>
    */
}

export default Donor;