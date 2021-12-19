import React from 'react';
import {useHistory} from "react-router-dom";
import AuthHandler from "./AuthHandler";
import DonorsList from "./CommonComponents/DonorsList";
import BloodChange from "./EmployeeComponents/BloodChange";
import EmployeeData from "./EmployeeComponents/EmployeeData";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Row, Col, Nav, Sonnet } from 'react-bootstrap';

function Employee(props) {

    const [employeeData, setEmployeeData] = React.useState(
        {givenName:"Jasmin", familyName:"Stavros", OIB:"12312321", dateOfBirth:"fdfdf", birthPlace:"sdsdsd",  residenceAdress:"fdfdf", privatePhoneNumber:"dfvd", workPhoneNumber:"dfdfd", email:"sdfdf"}
    )
    
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
                                <Nav.Link eventKey="second">Popis donora</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Evidencija krvi</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col className="col-10">
                        <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <EmployeeData mode="EMPLOYEE_ACCESING_DATA" username={"dk23145"}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <DonorsList/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <BloodChange/>
                                </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
    /*const [employeeData, setEmployeeData] = React.useState(
        {givenName:"Jasmin", familyName:"Stavros", OIB:"12312321", dateOfBirth:"fdfdf", birthPlace:"sdsdsd",  residenceAdress:"fdfdf", privatePhoneNumber:"dfvd", workPhoneNumber:"dfdfd", email:"sdfdf"}
    )

    const [view, setView] = React.useState("myData");
   
    return(
        <div>
            <div>
                <button onClick={() => setView("myData")}>Moji podaci</button>
                <button onClick={() => setView("donorsList")}>Donori</button>
                <button onClick={() => setView("bloodChange")}>Evidencija krvi</button>
            </div>

            <div hidden={!(view==="myData")}>
               <EmployeeData mode="EMPLOYEE_ACCESING_DATA" employeeData={employeeData}/>
            </div>

            <div hidden={!(view==="donorsList")}>
                <DonorsList/>
            </div>

            <div hidden={!(view==="bloodChange")}>
                <BloodChange/>
            </div>


        </div>

       

    )*/
}

export default Employee;