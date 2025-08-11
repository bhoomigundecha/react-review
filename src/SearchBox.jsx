import { useEffect } from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
export default function SearchBox(){
    let [city, setCity] = useState("");
    let checkCity = (event) =>{
        event.preventDefault();
        console.log(event.target.value)
        setCity(event.target.value)
    }
    let getCity = () =>{
        console.log(`The city name was : ${city}`)
    }
    return(
        <div className="SearchBox">
        <h3> Search for the weather </h3>
        <form>
            <TextField id="city" label="City Name" variant="outlined" required="true" value={city}
                onChange={checkCity}/>
            <br></br>
            <br></br>
            <Button variant="contained" onClick={getCity}> Search </Button>

        </form>
        </div>
    )
}