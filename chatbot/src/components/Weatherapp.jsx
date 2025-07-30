import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import WithHeaderAndQuoteExample from "./cardform";
import { NavLink } from 'react-router-dom';


function Weatherapp() {
  const [cityname, setcityname] = useState("");
  const [citylocation, setcitylocation] = useState("");
  const [citytemperature, setcitytemperature] = useState("");
 
  function oncityChange(e) {
    setcityname(e.target.value);
  }
  async function checkWeather(e) {
    e.preventDefault();
    try {
      const weatherRes = await fetch(`https://P2pclouds.up.railway.app/v1/learn/weather?city=${cityname}`);
      const weather = await weatherRes.json();
      const citylocation=setcitylocation(weather.location.name);
      const citytemperature=setcitytemperature(weather.current.temp_c);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
   
  }
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h1 className="text-center mb-4">Weather App</h1>
        <form onSubmit={checkWeather}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city name"
              name="cityname"
              onChange={oncityChange}
              value={cityname}
            />
          </div>
          <div className="d-grid gap-2 mb-4">
            <button type="submit" className="btn btn-primary">Get Weather</button>
          </div>
        </form>
        {citylocation && (
          <WithHeaderAndQuoteExample location={citylocation} temperature={citytemperature}/>
        )}
      </div>
       
        <NavLink to="/profile">
               <button type='submit' className="nav-button">Go to login</button>
             </NavLink>
    </div>
  );
}
export default Weatherapp;