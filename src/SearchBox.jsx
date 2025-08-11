import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"

export default function SearchBox() {
    const API_URL = "";
    const API_KEY = "";

    const [city, setCity] = useState("");

    const getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            if (!response.ok) throw new Error("City not found");
            let jsonResponse = await response.json();
            console.log(jsonResponse);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!city.trim()) {
            alert("Please enter a city name.");
            return;
        }
        getWeatherInfo();
    };


    return (
        <div className="SearchBox">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <br /><br />
                <Button type="submit" variant="contained">Search</Button>
            </form>
        </div>
    );
}
