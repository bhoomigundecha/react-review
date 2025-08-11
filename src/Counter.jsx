import { useState, useEffect } from "react";

export default function Counter(){
    let [count, setCount] = useState(0);

    const incCount = () =>{
        setCount(count + 1);
    }
    useEffect(function sideEffect(){
        console.log("Side effect executed");
    })

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={incCount}>Increment</button>
        </div>
    )
}