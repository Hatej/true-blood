import React from 'react';
import DonorData from "./DonorData";
import DonationForm from "../EmployeeComponents/DonationForm";

function DonorsList(props) {

    const [donorsList, setDonorsList] = React.useState(
        [
            {givenName:"Darko", familyName:"Pardon", OIB:"2323453432", dateOfBirth:"2021-01-02", birthPlace:"sdsd", residenceAdress:"dfdfd", 
            workplaceName:"ffgfg", privatePhoneNumber:"dfdf", workPhoneNumber:"dfdf", email:"dfdf", bloodType:"B+", donorId: 1, ableToDonate:true},

            {givenName:"Jorko", familyName:"Pardon", OIB:"112", dateOfBirth:"2021-01-02", birthPlace:"sdsd", residenceAdress:"dfdfd", 
            workplaceName:"ffgfg", privatePhoneNumber:"dfdf", workPhoneNumber:"dfdf", email:"dfdf", bloodType:"B+", donorId: 2, ableToDonate:false},

            {givenName:"Stjepan", familyName:"Pardon", OIB:"232", dateOfBirth:"2021-01-02", birthPlace:"sdsd", residenceAdress:"dfdfd", 
            workplaceName:"ffgfg", privatePhoneNumber:"dfdf", workPhoneNumber:"dfdf", email:"dfdf", bloodType:"0", donorId: 4, ableToDonate:true}
        ]
    )

    const emptyDonor = {givenName:"", familyName:"", OIB:"", dateOfBirth:"", birthPlace:"", residenceAdress:"", workplaceName:"", privatePhoneNumber:"", workPhoneNumber:"", email:"", bloodType:"", donorId: undefined, ableToDonate:""}


    const NORMAL = "NORMAL", DETAILS = "DETAILS", ADDING = "ADDING", MAKING_DONATION = "MAKING_DONATION"
    const [view, setView] = React.useState(NORMAL);

    const [editedDonor, setEditedDonor] = React.useState(donorsList[0]);

    const [donorMakingDonation, setDonorMakingDonation] = React.useState(donorsList[0])
  
    const [filter, setFilter] = React.useState("");

    function filterFunction(event) {
        setFilter(event.target.value);
    }

    function setViewTo(view, id) {

        let index = donorsList.findIndex((element)=>element.donorId === id)

        switch (view) {
            case DETAILS:
                setEditedDonor(donorsList[index]);
                break;
            case MAKING_DONATION:
                setDonorMakingDonation(donorsList[index]);
                break;


        }
        
        setView(view)
    }

    return(
        <div>
          
            <div hidden={view !== NORMAL}>
                <div>
                    <input type="text" name="filter" onChange={filterFunction} placeholder="Pretraži..."/>
                    <button  onClick={() => setViewTo(ADDING)}>Dodaj donora</button>
                </div>
                <div>
                    <table>
                    <tr>
                        <th>Ime</th>
                        <th>Prezime</th>
                        <th>Krvna grupa</th>
                        <th>Mogućnost Doniranja</th>
                    </tr>
                    {donorsList.map(donor => 
                        <tr key={donor.donorId} hidden={!(donor.givenName.includes(filter) || donor.familyName.includes(filter) || donor.bloodType.includes(filter))}>
                            <td>{donor.givenName}</td>
                            <td>{donor.familyName}</td>
                            <td>{donor.bloodType}</td>
                            <td>{donor.ableToDonate ? "Može" : "Ne može"}</td>
                            <td><button onClick={() => setViewTo(DETAILS, donor.donorId)}>Details</button></td>
                            <td><button hidden={donor.ableToDonate === false} onClick={() => setViewTo(MAKING_DONATION, donor.donorId)}>Obavi donaciju</button></td>
                        </tr>
                    )}
                    </table>
                </div>
            </div>
            <div hidden={view !== DETAILS}>
                <DonorData mode="EMPLOYEE_ACCESING_DATA" donorData={editedDonor}/>
                <button onClick={() => setViewTo(NORMAL)}> Vrati se nazad </button>
            </div>
            <div hidden={view !== ADDING}>  
                <DonorData mode="EMPLOYEE_ACCESING_DATA" donorData={emptyDonor}/>    
                <button onClick={() => setViewTo(NORMAL)}> Vrati se nazad </button> 
            </div>
            <div hidden={view !== MAKING_DONATION}>  
                <DonationForm donorData={donorMakingDonation}/>
                <button onClick={() => setViewTo(NORMAL)}> Vrati se nazad </button> 
            </div>
            
       </div>
       
    )
}

export default DonorsList;