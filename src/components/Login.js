import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (addToken) => {
    const [data, setData] = useState({
        username: "",
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
        axios.post("http://127.0.0.1:8000/api/v1/auth/authenticate", data).then((res) => {
            console.log(res.data);
            window.sessionStorage.setItem("auth_token", res.data.token);
            window.sessionStorage.setItem("ulogovan","user");
            addToken(res.data.token);
            console.log(window.sessionStorage.auth_token);
            console.log("break");
            console.log(window.sessionStorage.getItem("auth_token"));
            navigate("/");
        }).catch(e => {
            console.log(e);
        })
    }
    return (
        <div className="forma-n">
        <img className='no-img' src={korisnik} />
        <form onSubmit={handleLogin}>
        <h2>Forma za logovanje korisnika</h2>
            <label>Email:</label>
            <input  className='forma-input' type="text" required name="email" onInput={handleInput}></input>
            <label>Lozinka:</label>
            <input className='forma-input' type="text" required name="password" onInput={handleInput}></input>
            <button buttonSize='btn--large' buttonStyle='btn--outline' >
                                Login
                            </button>
        </form>
        </div>
    );
}
 
export default Login;