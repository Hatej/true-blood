import React from 'react';
import {useHistory} from "react-router-dom";
import AuthHandler from "./AuthHandler";
import MyData from "./CommonComponents/MyData";
import DonationHistory from "./DonorComponents/DonationHistory";
import Messages from "./DonorComponents/Messages";

function Donor(props) {
    const [view, setView] = React.useState("myData");

    return(
        <div>
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

        </div>

       

    )
}

export default Donor;