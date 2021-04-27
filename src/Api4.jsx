import React, {useState, useEffect} from 'react';
import "./Api4.css";
import axios from "axios";


function Api4() {
    // const [cityname, setcityname] = useState("")
    const API_KEY = "83ae873f99e8cca64fd2e00d659b24be"
    const [Id, setId] = useState();
    const [Maahol, setMaahol] = useState();
    const [Desc, setDesc] = useState("");
    const [Humi, setHumi] = useState();
    const [Tempr, setTempr] = useState()

    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=Bern&appid=${API_KEY}`;

    useEffect(() => {
        async function getData(){
            const result = await axios.get(apiCall)
             setId(result.data.name);
             setMaahol(result.data.weather[0].main);
             setDesc(result.data.weather[0].description);
             setHumi(result.data.main.humidity);
             setTempr(result.data.main.temp);
        }

        console.log(getData);
        // return () => {
        //     cleanup
        // }
        getData();
    })

    return (
        <div className="weather__app">
            <input placeholder="City Name"/> 
            <button>Find Weather</button>
            
            <div className="temp__cont">
                <div className="temp__contl">
                    {Tempr}
                </div>

                <div className="temp__contr">
                    {Humi}
                </div>
            </div>

            <div>
                <h1>City ID is: {Id}</h1>
            </div>

            <div>
                <div>
                    <h3>It is currently {Maahol}</h3>
                </div>
                <p>
                    {Desc}
                </p>
            </div>
        </div>
    )
}

export default Api4
