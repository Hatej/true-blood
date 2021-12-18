import React from 'react';
import {useHistory} from "react-router-dom";
import AuthHandler from "./AuthHandler";
import DonorData from "./CommonComponents/DonorData";
import DonationHistory from "./DonorComponents/DonationHistory";
import Messages from "./DonorComponents/Messages";

function Donor(props) {
    const [view, setView] = React.useState("DonorData");

    const donorData = {givenName:"Josip", familyName:"Pardon", OIB:"232332", dateOfBirth:"2021-01-02", birthPlace:"sdsd", residenceAdress:"dfdfd", 
        workplaceName:"ffgfg", privatePhoneNumber:"dfdf", workPhoneNumber:"dfdf", email:"dfdf", bloodType:"A+", donorID: 1,  ableToDonate:false}

    return(
        <div>
            <div>
                <button onClick={() => setView("DonorData")}>Moji podaci</button>
                <button onClick={() => setView("donationHistory")}>Povijest donacija</button>
                <button onClick={() => setView("Messages")}>Poruke</button>
                Kratki info
            </div>

            <div hidden={!(view==="DonorData")}>
                <DonorData mode="DONOR_ACCESSING_DATA" donorData={donorData} />

            </div>

            <div hidden={!(view==="donationHistory")}>
                <DonationHistory/>
            </div>

            <div hidden={!(view==="Messages")}>
                <Messages/>
            </div>

        </div>

       

    )
}

export default Donor;