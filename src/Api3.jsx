import React, {useState, useEffect} from 'react';
import axios from 'axios';                                              // import axios

function Api3() {
    const [num, setnum] = useState(1) //Create a state for storing the numbers of pokemon (num) initialise it with 1, and function (setNum) to change the num
    const [name, setname] = useState('') //Create a state for storing the name of pokemon (name) initialise it with empty string, and function (setName) to change the name accordingly
    const  pokemon1 = `https://pokeapi.co/api/v2/pokemon/${num}`; // Constant created for the api calling link to use it instead of the whole link

useEffect(() => {
    async function dataGet(){   //Create an async function dataget to fetch the api
        const res = await axios.get(pokemon1) // constant res fetches the api results with axios and async, await waits for the results to arrive and axios,get fetches them
        setname(res.data.name); // the setname function created in usestate then sets the name of the pokemon from the recieved data using res.data.name where res.data = the data from the result function
        // console.log(res.data.name)
    }
    // return () => {
    //     cleanup
    // }
    dataGet();
});                             //If we added the [] after the "}", the state will change only once when the page loads thus only once will the name be refreshed instead of updating again and again on button click


    return (
        <div>
            <div className="p__1">                      {/* Create a div to display the pokemon name */}
                {/* <input 
                type="text" 
                placeholder="Enter Pokemon No:"
                value={num}
                onChange={event => setnum(event.target.value)}
                >

                </input> */}
                {/* {num} */}
                The name of the pokemon is {name}   {/* We call the name variable we created in usestate to display the value it contains */}
                <br></br>
                Change the pokemon name?
                <br/>
                click below

                {/* <button
                onClick={getpokemon}
                >
                    Call The Pokemon
                </button> */}
            </div>
            <button onClick={() => setnum(num+1)}>      {/* Whenever the button is clicked, the setnum function will change the number by adding 1, hence forth changing the pokemon name associated with the number as well (see line 7 and 12) */}
                Change
            </button>

            {/* <div className="p__2">
                Pokemon 2
            </div>

            <div className="p__3">
                Pokemon 3
            </div> */}
        </div>
    )
}

export default Api3
