import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Fligths = (addToken) => {
    const [error, SetError] = useState();
    const [dataFlights, setData] = useState();

    useEffect(() => {
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({

        });
        var config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/api/v1/airline',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + window.sessionStorage.auth_token
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);

    return ( 
        <div className="wrapper">
            <h1>Flights</h1>
            {dataFlights && dataFlights.map((flight) =>(
                <div className="container">
                    <h2>Flight Origin:</h2>
                    <p>{flight.flightorigin}</p>
                    <h2>Flight Destination:</h2>
                    <p>{flight.flightdestination}</p>
                    <h2>Flight Status:</h2>
                    <p>{flight.flightstatus}</p>
                    <h2>Flight Date:</h2>
                    <p>{flight.flightdate}</p>
                    <h2>Number of layovers:</h2>
                    <p>{flight.numoflayovers}</p>
                    <h2>Available seats:</h2>
                    <p>{flight.numofavailableseats}</p>
                </div>

                
            ))}
        </div>
     );
}
 
export default Fligths;