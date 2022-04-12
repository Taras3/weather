import React from 'react';

const Weather = (props) => {
    console.log(props.temp);
    return (
        <div>
            {props.city && 
            <div>
              <p>Temperature: {props.temp}</p>
              <p>Location: {props.city}</p>
              <p>Country: {props.country}</p>
            </div>
            }
            <p>{props.error}</p>
            
        </div>
    )
}

export default Weather;