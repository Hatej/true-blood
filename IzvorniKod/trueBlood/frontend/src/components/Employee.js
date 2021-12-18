import React from 'react';
import {useHistory} from "react-router-dom";
import AuthHandler from "./AuthHandler";
import DonorsList from "./CommonComponents/DonorsList";
import BloodChange from "./EmployeeComponents/BloodChange";
import EmployeeData from "./EmployeeComponents/EmployeeData";

function Employee(props) {

    const [employeeData, setEmployeeData] = React.useState(
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

       

    )
}

export default Employee;