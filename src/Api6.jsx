import React, {useState, useEffect} from 'react'
import './Api6.css';
import axios from 'axios'

const c19 = "https://api.covid19india.org/data.json";

function Api6() {

    const [sName1, setSName1] = useState();
    const [sActive, setsActive] = useState();
    const [sConf, setsConf] = useState();
    const [sDea, setsDea] = useState();
    const [sRec, setsRec] = useState();

    useEffect(() => {
        async function GetState(){
            const ret = await axios.get(c19);
            setSName1(ret.data.statewise[1].state);
            setsConf(ret.data.statewise[1].confirmed)
            setsActive(ret.data.statewise[1].active);
            setsRec(ret.data.statewise[1].recovered)
            setsDea(ret.data.statewise[1].deaths)
        }
        // return () => {
        //     cleanup
        // }
        GetState();
    })

    return (
        <div className="state__table">
            <table>
                <tr>
                    <th>State</th>
                    <th>Active</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
                <tr>
                    <td>{sName1}</td>
                    <td>{sActive}</td>
                    <td>{sConf}</td>
                    <td>{sRec}</td>
                    <td>{sDea}</td>
                </tr>
                <tr>
                    <td>State</td>
                    <td>Deaths</td>
                    <td>Confirmed</td>
                    <td>Deaths</td>
                    <td>Confirmed Today</td>
                </tr>
                <tr>
                    <td>State</td>
                    <td>Deaths</td>
                    <td>Confirmed</td>
                    <td>Deaths</td>
                    <td>Confirmed Today</td>
                </tr>
            </table>
        </div>
    )
}

export default Api6
