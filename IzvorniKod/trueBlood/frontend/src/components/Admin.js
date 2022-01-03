import React from 'react';
import EmployeesList from "./AdminComponents/EmployeesList";
import Limits from "./AdminComponents/Limits";
import DonorsList from "./CommonComponents/DonorsList";
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Admin(props) {
   
    return(
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="d-flex flex-row-md">
                    <Col className="col-1">
                        <Nav variant="pills" className="">
                            <Nav.Item>
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