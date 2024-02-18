import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios, * as others from 'axios';


const Fligths = () => {
    // const [error, SetError] = useState();
    const [dataFlights, setData] = useState();

    // const getData = async () => {
    //     var axios = require('axios');
    //     var qs = require('qs');
    //     var data = qs.stringify({

    //     });
    //     var config = {
    //         method: 'get',
    //         url: 'http://127.0.0.1:8080/api/v1/airline',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Authorization': 'Bearer ' + window.sessionStorage.auth_token
    //         },
    //         data: data
    //     };

    //     axios(config)
    //         .then(function (response) {
    //             console.log(JSON.stringify(response.data));
    //             setData(response.data.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    //   };

    // const axios = require('axios');
    // const qs = require('qs');

  //   const getData = async () => {
  //     try {
  //         const data = qs.stringify({});
  //         const response = await axios.get('http://127.0.0.1:8080/api/v1/airline', {
  //             headers: {
  //                 'Accept': 'application/json',
  //                 'Authorization': 'Bearer ' + window.sessionStorage.auth_token
  //             },
  //             data: data
  //         });
  //         console.log(JSON.stringify(response.data));
  //         setData(response.data.data); // Assuming setData is defined elsewhere
  //     } catch (error) {
  //         console.log(error);
  //     }
  // };

    const getDataFetch = async () => {
        let response = await fetch("http://127.0.0.1:8080/api/v1/airline", {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + window.sessionStorage.auth_token
          },
          mode: 'cors',
          cache: 'default'
        });

        let data = await response.json();
        setData(data);
        
        console.log(data);
      };

    useEffect(() => {
      getDataFetch();
    }, []);

    return ( 
        <div className="wrapper">
            <h1>Flights</h1>
            {dataFlights && dataFlights.map((flight, index) =>(
                <div key={index} className="container">
                    <h2>Flight Origin:</h2>
                    <p>{flight.flightOrigin}</p>
                    <h2>Flight Destination:</h2>
                    <p>{flight.flightDestination}</p>
                    <h2>Flight Status:</h2>
                    <p>{flight.flightStatus}</p>
                    <h2>Flight Date:</h2>
                    <p>{flight.flightDate}</p>
                    <h2>Number of layovers:</h2>
                    <p>{flight.numOfLayovers}</p>
                    <h2>Available seats:</h2>
                    <p>{flight.numOfAvailableSeats}</p>
                </div>

                
            ))}
        </div>
     );
}
 
export default Fligths;