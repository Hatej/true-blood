import React from 'react';

function Messages(props) {
    
    const [listOfMessages, setlistOfMessages] = React.useState([
        {date: "777", sender: "Zagreb", messageText: "jdsfsaofjsadoipgjsiodfgjidfsojgjdsoipfgjdsfopgjdsfoigjdsopifgjdsoipfgjiodsfgjoidsfjgdsfigjidsfpg", messageID: 1, opened: false}, 
        {date: "123", sender: "tihomir", messageText: "dfgdofsgdsfgdsfgkdspfgkpodsfkgdskfgodskfgodskfgpodskfgposkdfgpokdsfpgodsopfgkdosfkgdposfg", messageID: 2, opened: false}, 
        {date: "33", sender: "ja", messageText: "dfgkdfsogdfkosgdfsgdsfgkdspfgkopdsfkgpdsfkgpodsfkgpodfskgopdfskgopdsfkgodskfgopdsfkgpodfksogdfs", messageID: 3, opened: false}, 
    ]);

    const [activeMessage, setActiveMessage] = React.useState()

    function openMessage(id) {
        let index = listOfMessages.findIndex((element)=>element.messageID === id)
        let message = listOfMessages[index]
        console.log(id)
        setActiveMessage(message)
        if (message.opened === false) {
            message.opened = true
            //treba se još poslati backendu da u bazi poruci s ovim IDem namjesti opened = true
        }
    } 
    

    return(
        <div>
            <div>
                <table>
                    <tr>
                        <th>Datum</th>
                        <th>Pošiljatelj</th>
                        
                    </tr>

                    {listOfMessages.map(message => 

                            <tr onClick={() => openMessage(message.messageID)}>
                                <td>{message.date}</td>
                                <td>{message.sender}</td>
                                <td>{message.opened ? "Opened" : "Unopened" }</td>
                            </tr>
                    )}
                </table>
            </div>
            <br/>
            {activeMessage === undefined ? "Nije odbranan niti jedna poruka" : ""}
            <div hidden={activeMessage === undefined}>
                <p>Sender:{activeMessage === undefined ? "" : activeMessage.sender} Date:{activeMessage === undefined ? "" : activeMessage.date}</p>
                <hr/>
                <div>
                    {activeMessage === undefined ? "" : activeMessage.messageText}
                </div>
            </div>
        </div> 
       
       
    )
}

export default Messages;