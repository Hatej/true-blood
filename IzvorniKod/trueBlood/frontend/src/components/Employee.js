import React from 'react';
import {useHistory} from "react-router-dom";
import AuthHandler from "./AuthHandler";
import MyData from "./CommonComponents/MyData";
import DonorsList from "./CommonComponents/DonorsList";
import BloodChange from "./EmployeeComponents/BloodChange";

function Employee(props) {
    const [view, setView] = React.useState("myData");
    let podatak = 3;
    return(
        <div>
            <div>
                <button onClick={() => setView("myData")}>Moji podaci</button>
                <button onClick={() => setView("donorsList")}>Donori</button>
                <button onClick={() => setView("bloodChange")}>Evidencija krvi</button>
            </div>

            <div hidden={!(view==="myData")}>
                <MyData/>
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