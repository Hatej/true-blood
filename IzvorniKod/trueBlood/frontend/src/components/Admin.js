import React from 'react';
import {useHistory} from "react-router-dom";
import AuthHandler from "./AuthHandler";
import EmployeesList from "./AdminComponents/EmployeesList";
import Limits from "./AdminComponents/Limits";
import DonorsList from "./CommonComponents/DonorsList";
import DonorData from "./CommonComponents/DonorData";
import { Tab, Row, Col, Nav, Sonnet } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Donor.css';

function Admin(props) {

    const [view, setView] = React.useState("myData");

        
    return(
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col className="col-1">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="red" >
                                <Nav.Link eventKey="first">Djelatnici</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Donori</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Granice</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col className="col-10">
                        <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <EmployeesList/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <DonorsList/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Limits/>
                                </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </div>

       

    )
}

export default Admin;