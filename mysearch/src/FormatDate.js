import React from "react";

function FormatDate (props) {
   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];
   let day = days[props.date.getDay()];
   let hours = props.date.getHours();
   let minutes = props.date.getMinutes();

   if (hours < 10) {
    hours = `0${hours}`;
   }
   if (minutes < 10) {
    minutes = `0${minutes}`;
   }
 
   return (
    <div>
        {day}, {hours}:{minutes}
    </div>
   );
}
export default FormatDate;