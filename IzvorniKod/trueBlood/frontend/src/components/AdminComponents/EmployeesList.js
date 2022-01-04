import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';
import SignInForm from '../SignInForm';
import { SPRING_URL } from '../Constants';
import EmployeeData from '../EmployeeComponents/EmployeeData'

function EmployeesList(props) {
    
    const [employeesList, setEmployeesList] = useState([]);

    async function getEmployeesData() {
        
    }

    useEffect(() => {
        
    }, []);

    const NORMAL = "NORMAL", DETAILS = "DETAILS", ADDING = "ADDING"
    const [view, setView] = useState(NORMAL);

    const [editedEmployee, setEditedEmployee] = useState({username: "", name:"", surname:"", role:"", blood:{}, rejected:"", birthplace: "", address: "", workplace: "", mobilePrivate: "", mobileBusiness: "", birthdate: ""});

    const [filter, setFilter] = useState("");

    function filterFunction(event) {
        setFilter(event.target.value);
    }

    function setViewTo(view, username) {
        let index = employeesList.findIndex((element)=>element.username === username)
        switch (view) {
            case DETAILS:
                setEditedEmployee(employeesList[index]);
                break;
            default:
                break;
        }
        if(view === NORMAL){
            getEmployeesData();
        }
        setView(view)
    }

    function deleteEmployee(id){
        console.log("Brisem " + id);
        
    }

    return(
        <div>
            {(() => {
                console.log(view);
                switch(view){
                    case NORMAL:
                        return(
                            <div className="container">
                                <div>
                                    <input type="text" name="filter" onChange={filterFunction} placeholder="Pretraži..."/>
                                    <button className="btn btn-danger ms-1" onClick={() => setViewTo(ADDING)}>Dodaj zaposlenika</button>
                                </div>
                                <div>
                                    <Table hover>
                                        <thead>
                                            <tr>
                                                <th>Ime</th>
                                                <th>Prezime</th>
                                            
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {employeesList.map(employee =>
                                                <tr key={employee.username} hidden={!(employee.name.includes(filter) || employee.surname.includes(filter))}>
                                                    <td>{employee.name}</td>
                                                    <td>{employee.surname}</td>
        
                                                    <td><button className="btn btn-outline-danger" onClick={() => setViewTo(DETAILS, employee.username)}>Detalji</button></td>
                                                   
                                                    <td><button className="btn btn-danger" onClick={() => deleteEmployee(employee.username)}>Izbriši zaposlenika</button></td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        )
                    case DETAILS:
                        return(
                            <div>
                                <EmployeeData mode="ADMIN_ACCESSING_DATA" username={editedEmployee.username} setView={setViewTo}/>
                                <td><button className="btn btn-outline-danger" onClick={() => setViewTo(NORMAL)}>Vrati se nazad</button></td>
                            </div>
                        )
                    case ADDING:
                        return(
                            <div>  
                                <EmployeeData mode="ADMIN_ADDING_EMPLOYEE" username={editedEmployee.username} setView={setViewTo}/>
                                <td><button className="btn btn-outline-danger" onClick={() => setViewTo(NORMAL)}>Vrati se nazad</button></td>
                            </div>
                        )
        
                    default:
                        break;
                }
            })()}
       </div>
       
    )
}

export default EmployeesList;