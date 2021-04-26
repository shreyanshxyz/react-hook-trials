import React, {useState} from 'react'
import axios from 'axios';

function Api3() {
    const [num, setnum] = useState(0)
    const  pokemon1 = `https://pokeapi.co/api/v2/pokemon/${num}`;

    const getpokemon = () => {
        axios.get(`pokemon1`)
    }

    return (
        <div>
            <div className="p__1">
                <input 
                type="text" 
                placeholder="Enter Pokemon No:"
                value={num}
                onChange={event => setnum(event.target.value)}
                >

                </input>
            </div>

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
