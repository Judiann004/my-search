import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import WeatherTemp from "./WeatherTemp";
import './App.css';

function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
let [weather, setWeather] = useState({ready: false});

function DisplayProps (response) {
  console.log(response.data);
  setWeather({
    ready: true,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    date: new Date (response.data.dt * 1000),
    humidity: response.data.main.humidity,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    description: response.data.weather[0].description,
    city: response.data.name

  });
  
}

function search () {
  let apiKey = "ed55b36e362d8733f7d859247cedeaf2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios
  .get(apiUrl)
  .then(DisplayProps)
  .catch(error => {
    console.log(error);
    // Handle the error, e.g., display an error message to the user
  });

}

function showProps(event) {
   event.preventDefault();
   search()
}

function updateCity(event) {
 setCity(event.target.value);
}
  

    if (weather.ready) {
      return (
        <div className="App">
         <div className="container">
          <h1>Weather App</h1>
          <div className="Weather-app">
          <form onSubmit={showProps}>
          <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    autofocus="on"
                    autocomplete="off"
                    className="form-control shadow-sm" onChange={updateCity}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="form-control btn btn-primary shadow-sm" 
                  />
                </div>
                </div>
          </form>
          <h1 className="city text-muted">{weather.city}</h1>
          <ul>
            <li className="text-muted"><FormatDate date={weather.date} /></li>
            <li className="text-muted text-capitalize">{weather.description}</li>
          </ul>
          
          <div className="row">
           <div className="col-6">
            <div className="clearfix">
            <img src={weather.icon} alt={weather.description} className="Weather_cloud float-left" />
              
              <WeatherTemp celcius={weather.temperature} />
              
            </div>
           </div>
    
           <div className="col-6">
          <ul>
            <li className="Climate">
              Humidity: <span>{Math.round(weather.humidity)}</span>%
            </li>
            <li className="Climate">
              Wind: <span>{Math.round(weather.wind)}</span>km/h
            </li>
          </ul>
          </div>
    
          </div>
    
          </div>
    
          </div>
        </div>
      );
    } 
    else {
      search();
        return "Loading...";
    }

 
}

export default Weather;