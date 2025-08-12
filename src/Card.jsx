import React from "react";
import './App.css';

export default function Card(){
    return(
        <div className="main h-screen w-screen">
            <div className="w-3/4 h-1/2 mt-16 ml-7 bg-white">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1/5 flex items-center justify-center">
                    <h3 className="font-serif text-center font-bold"> News you can trust </h3>
                </div>
                <div className="bg-white h-4/5 flex flex-col items-center justify-center">
                    <h3 className="font-bold font-serif text-black">
                        Stay up to date with the Latest!
                    </h3>
                    <p className="text-black">
                        Subscribe to our newsletter for the latest content straight to your inbox.
                    </p>
                    <input className="mt-3 px-1 py-0.5 flex justify-center text-center rounded-lg" placeholder="you@example.com"></input>
                    <button className="mt-2 bg-blue-500 text-white font-bold py-0.5 px-5 rounded-full">Subscribe</button>
                    <p className="text-black ">
                        We value your privacy
                    </p>
                </div>
            </div>
        </div>
    )
}