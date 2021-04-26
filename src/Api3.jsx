import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Api3() {
    const [num, setnum] = useState(1)
    const [name, setname] = useState('')
    const  pokemon1 = `https://pokeapi.co/api/v2/pokemon/${num}`;

useEffect(() => {
    async function dataGet(){
        const res = await axios.get(pokemon1)
        setname(res.data.name);
        // console.log(res.data.name)
    }
    // return () => {
    //     cleanup
    // }
    dataGet();
});


    return (
        <div>
            <div className="p__1">
                {/* <input 
                type="text" 
                placeholder="Enter Pokemon No:"
                value={num}
                onChange={event => setnum(event.target.value)}
                >

                </input> */}
                {/* {num} */}
                The name of the pokemon is {name}
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
            <button onClick={() => setnum(num+1)}>
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
