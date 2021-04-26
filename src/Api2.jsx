import React from 'react';
import {useState, useEffect} from 'react';

function Api2() {

    const [num, setNum] = useState(1);

    useEffect(() => {
        document.title = `Bruh ${num} baar dabaya`;
        // return () => {
        //     cleanup
        // }
    });
    return (
        <div>
            <h2>Tumne Bruh {num} baar kiya</h2>
            <button 
            onClick = {() => setNum(num*2)}
            >
                Bruh Karo
            </button>
        </div>
    )
}

export default Api2
