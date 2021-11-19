import React, {useEffect, useState} from 'react';
import axios from "axios"
import {Link} from "react-router-dom";
import logo from './logo.png';

function Home(props) {

    const [users, setUsers] = useState([]);
/*
    useEffect(() => {
        axios.get("http://localhost:8080/user", {withCredentials: true})
            .then()
            .catch(err => console.log(err));
    })

 */

    return (
            <div>home
                {users.map(user => {
                    return <pre>{JSON.stringify(user)}</pre>
                })}
            </div>
        )


}

export default Home;