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
            The project was coded by <a href="mailto:judiannpraise004@gmail" target="_blank" rel="noreferrer">Judiann Praise</a> and is {""} <a href="https://github.com/Judiann004/my-search" target="_blank" rel="noreferrer">open- sourced on Github</a>
          </footer>
          
          </div>
        </div>
      );
    } 

export default App;
