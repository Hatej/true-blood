import React from 'react';

function DonationHistory(props) {

    const [listOfDonations, setListOfDonations] = React.useState([
        {date: "123.1", place: "Zagreb", status: "succesful", donationID: 1}, 
        {date: "323.1", place: "sdd", status: "unsuccesful", donationID: 2}, 
        {date: "23", place: "Zagrsdsdeb", status: "succesful", donationID: 3}
    ]);

    function generatePDF(id) {
        console.log(id)
    } 
    

    return(
        <div>
            <table>
                <tr>
                    <th>Mjesto</th>
                    <th>Vrijeme</th>
                    <th>Status</th>
                </tr>
                {listOfDonations.map(donation => 
                    <tr>
                        <td>{donation.date}</td>
                        <td>{donation.place}</td>
                        <td>{donation.status}</td>
                        <td><button onClick={() => generatePDF(donation.donationID)} hidden={donation.status === "unsuccesful"}>Preuzmi PDF</button></td>
                    </tr>
                    
                )}
                
            </table>
        </div> 
       
       
    )
}

export default DonationHistory;