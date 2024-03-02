import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';

const Login = () => {
    const [data, setData] = useState({
        name: "",
        password: ""
    });
    let navigate = useNavigate();
    function handleInput(e) {
        let newData = data;
        newData[e.target.name] = e.target.value;
        setData(newData);
    }
    function handleLogin(e) {
        e.preventDefault();
        axios.post("http://127.0.0.1:8080/api/v1/auth/authenticate", data).then((res) => {
            console.log(res.data);
            window.sessionStorage.setItem("auth_token", res.data.token);
            navigate("/home");
        }).catch(e => {
            console.log(e);
        })
    }
    return (
        <div className="create">
        <form onSubmit={handleLogin}>
        <h2>Forma za logovanje korisnika</h2>
            <label>Username:</label>
            <input  className='create' type="text" required name="name" onInput={handleInput}></input>
            <br/>
            <label>Lozinka:</label>
            <input className='create' type="text" required name="password" onInput={handleInput}></input>
            <br/>
            <button buttonSize='btn--large' buttonStyle='btn--outline' >Login</button>
        </form>
        </div>
    );
}
 
export default Login;