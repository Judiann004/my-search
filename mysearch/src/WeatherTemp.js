import React, { useState } from 'react'

export default function WeatherTemp(props) {
  let [unit, setUnit] = useState("celcius");

  function ConFah(event) {
   event.preventDefault();
   setUnit("fahrenheit")
  }

  function ConCel (event) {
    event.preventDefault();
    setUnit("celcius")
  }

  if (unit === "celcius") {
    return (
        <div className='CelciCon'>
            <span className="Temperature">{Math.round(props.celcius)}</span>
            <span className="units">°C |{""} 
            <a href="./" onClick={ConFah}>°F</a></span>
        </div>
      )
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
        <div className='CelciCon'>
            <span className="Temperature">{Math.round(fahrenheit)}</span>
            <span className="units">
            <a href="./" onClick={ConCel}>°C 
            </a>|{""} 
            °F</span>
        </div>
      )
  }
   
}
