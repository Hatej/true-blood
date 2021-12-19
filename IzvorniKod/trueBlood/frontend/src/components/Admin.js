import React from 'react';
import {useHistory} from "react-router-dom";
import AuthHandler from "./AuthHandler";
import EmployeesList from "./AdminComponents/EmployeesList";
import Limits from "./AdminComponents/Limits";
import DonorsList from "./CommonComponents/DonorsList";
import DonorData from "./CommonComponents/DonorData";

function Admin(props) {

    const [view, setView] = React.useState("myData");

    return(
        <div>
            <div>
                <button onClick={() => setView("employees")}>Djelatnici</button>
                <button onClick={() => setView("donors")}>Donori</button>
                <button onClick={() => setView("limits")}>Granice</button>
            </div>

            <div hidden={!(view==="employees")}>
                <EmployeesList/>
            </div>

            <div hidden={!(view==="donors")}>
                <DonorsList/>
            </div>

            <div hidden={!(view==="limits")}>
                <Limits/>
            </div>
        </div>

       

    )
}

export default Admin;