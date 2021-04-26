// USESTATE TESTING

import React from 'react'
import {useState} from 'react' // Importing useState
// import Axios from 'axios';



function Api1() {

    const [num, setNum] = useState(1); // WE call usestate and then give the state value num a value of 1, we then create function setNum to update its value
    return (
        <div>
            <h1>Bruh ({num})</h1>                      {/* Here the num will be displayed */}
            <button onClick = {() => setNum(num * 2)}> 
        {/* Now when the button is clicked, it calls the setnum function and the setnum function updates the value of num by multiplying it by two */}
                Bruh It
            </button>
        </div>
    )
}

export default Api1
