import React from 'react';

const Conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}, {props.responseObj.sys.country}</strong></p>
                   <p>{Math.round(props.responseObj.main.temp)}° | {props.responseObj.weather[0].description}</p>
               </div>
           : null
           }
       </div>
   )
}
export default Conditions;