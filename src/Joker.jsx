import { useState } from "react";
export default function Joker(){
    let [joke, setJoke] = useState("")
    let [punchline, setPunchline] = useState("")
    const url = "https://official-joke-api.appspot.com/random_joke";
    const getJoke= async() => {
        let response = await fetch(url);
        let jsonresponse = await response.json();
        setJoke(jsonresponse.setup)
        setPunchline(jsonresponse.punchline)
        console.log(jsonresponse);
        
    }
    return(
        <div>
            <h1> Joker </h1>
            <p>{joke}</p>
            <p> {punchline}</p>
            <button onClick={getJoke}> Get Joke </button>

            
            
        </div>
    )
}