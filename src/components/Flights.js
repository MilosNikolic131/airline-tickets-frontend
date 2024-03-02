import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios, * as others from 'axios';


const Fligths = () => {
    const [dataFlights, setData] = useState();
    const [destinations, setDestinations] = useState({
      fromDest: "",
      toDest: ""
    });

  function handleInput(e) {
    let newData = destinations;
    newData[e.target.name] = e.target.value;
    setDestinations(newData);
    }

    const handleFilter = async () => {
      let response = await fetch(`http://127.0.0.1:8080/api/v1/airline/${destinations.fromDest}-${destinations.toDest}`, {
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
        <div className="create">
          <h1>Flights</h1>
            <h2>Search flights:</h2>
            <label>Destination from:</label>
            <input  className='create' type="text" required name="fromDest" onInput={handleInput}></input>
            <label>Destination to:</label>
            <input  className='create' type="text" required name="toDest" onInput={handleInput}></input>
            <button buttonSize='btn--large' buttonStyle='btn--outline' onClick={handleFilter}>Search</button>
            <button buttonSize='btn--large' buttonStyle='btn--outline' onClick={getDataFetch}>Reset filter</button>
            <br/>
            <br/>
            <br/>
            <h2>Available flights</h2>
            {dataFlights && dataFlights.map((flight, index) =>(
                <div key={index} className="blog-details">
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