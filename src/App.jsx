import { useState } from "react";
import { useEffect} from "react";
import "./App.css";

function SearchBar({ onSearch }) {
    const [input, setInput] = useState("");

    function handleSearch() {
        onSearch(input);
    }

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Add a city"
                onChange={(e) => setInput(e.target.value)}
            />  
            <button onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}

function WeatherInfo({ weather }) {
    if (!weather) {
        return null;
    }
    return (
        <div className="weather-info">
            <h2>Weather Information</h2>

            <p> 
                Temperature: {weather.current.temperature_2m} °C
             </p>

             <p>
                Humidity: {weather.current.relative_humidity_2m}%
             </p>

             <p>
                Wind Speed: {weather.current.wind_speed_10m} km/h
             </p>

             <p>
                Weather Code: {weather.current.weather_code}
             </p>
        </div>
    );
}


function App() {

    const [searchedCity, setSearchedCity] = useState("");
    const [weather, setWeather] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if(searchedCity === "") {
            return;
        }

        setError("");

        const url = 
        `https://geocoding-api.open-meteo.com/v1/search?name=${searchedCity}`;

        setLoading(true);

        fetch(url)

        .then((response) => {
            return response.json();
        })

        .then((data) => {
            console.log(data.results);

            if(data.results.lenght === 0) {
                setError("City Not Found!");
                setLoading(false);
                return;
            }

            const latitude = data.results[0].latitude;
            const longitude = data.results[0].longitude;

            const weatherUrl = 
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`;


           return fetch(weatherUrl);

        })

            .then((response) => {

                if(!response) {
                    return;
                }

                return response.json();
            })

            .then((data) => {

                if(!data) {
                    return;
                }

                setWeather(data);
                setLoading(false);
            })

        .catch(() => {
            setError("Something went wrong");
            setLoading(false);
        });

    }, [searchedCity]);

    return (
        <div className="app">

            <h1>Weather App</h1>

            <SearchBar onSearch = {setSearchedCity} />

            <div className="Loading">
                {loading ? "Loading" : null}
            </div>
            <div>
                {error ? "Error" : null}
            </div>
            
            <WeatherInfo weather={weather} />

        </div>
    );
}

export default App;

