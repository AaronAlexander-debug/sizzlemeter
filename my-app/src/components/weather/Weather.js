import React, { useState } from 'react';
import Conditions from '../conditions/Conditions'

const Weather = () => {
    let [responseObj, setResponseObj] = useState({})
    let [cityName, setCityName] = useState('')
    let [unit, setUnit] = useState('imperial')

    const encodedCity = encodeURIComponent(cityName)

    function getWeather(e) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f34b2163c7mshfaa4c459e01cd35p16fcb9jsn517092c67579',
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
            }
        };
        
        fetch(`https://community-open-weather-map.p.rapidapi.com//weather?units=${unit}&q=${encodedCity}`, options)
            .then(response => response.json())
            .then(response => {setResponseObj(response)});

        e.preventDefault()
    }

    return (
        <div>
            <Conditions responseObj={responseObj} />
            <form onSubmit={getWeather}>
            <input type="text" placeholder="Enter a city.." value={cityName} onChange={ (e) => setCityName(e.target.value)}/>
            <input type="submit" value="Submit" />
            <label>
                <input
                type="radio"
                name="units"
                checked={unit === "metric"}
                value="metric"
                onChange={(e) => setUnit(e.target.value)}
                />
                Celsius
            </label>
            <label>
            <input
                type="radio"
                name="units"
                checked={unit === "imperial"}
                value="imperial"
                onChange={(e) => setUnit(e.target.value)}
                />
                Fahrenheit
            </label>
            <p>Type in the name of any city to find out what the SizzleMeter rates it!</p>
            </form>
        </div>
    )
}

export default Weather;

