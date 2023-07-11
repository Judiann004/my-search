import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
      return (
        <div className="App">
         <
          div className="container">
          <Weather defaultCity="ibadan" />
          <footer>
            The project was coded by <a href="mailto:judiannpraise004@gmail">Judiann Praise</a> and is {""} <a href="/">open- sourced on Github</a>
          </footer>
          
          </div>
        </div>
      );
    } 

export default App;
