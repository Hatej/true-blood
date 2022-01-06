import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {SPRING_URL} from '../Constants';
import AuthHandler from '../AuthHandler';


function Messages(props) {
    
    const [messages, setMessages] = useState({months: "false", belowLower: "false"});

    async function getMessages(){
        let data = await axios.get(SPRING_URL.concat('/user/getMessages'), {
                                    headers: {
                                        username: AuthHandler.getLoggedInUserName()
                                    }
                                }).then(res => res.data);
        console.log(data);
        setMessages(data);
    }

    useEffect(() => {
        getMessages();
    }, []);

    return(
        <div>
            <p hidden={!messages.belowLower}>Razina vaše krvne vrste je pala ispod donje granice! Pozivamo vas na doniranje!</p>
            <p hidden={!messages.months}>Još niste donirali ili je prošlo tri mjeseca od uspješne donacije. Pozivamo vas na doniranje!</p>
            <p hidden={messages.belowLower || messages.months}>Nemate poruka!</p>
        </div>    
    )
}

export default Messages;