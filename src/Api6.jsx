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

    const [sName2, setSName2] = useState();
    const [sActive2, setsActive2] = useState();
    const [sConf2, setsConf2] = useState();
    const [sDea2, setsDea2] = useState();
    const [sRec2, setsRec2] = useState();

    const [sName3, setSName3] = useState();
    const [sActive3, setsActive3] = useState();
    const [sConf3, setsConf3] = useState();
    const [sDea3, setsDea3] = useState();
    const [sRec3, setsRec3] = useState();

    useEffect(() => {
        async function GetState(){
            const ret = await axios.get(c19);
            setSName1(ret.data.statewise[1].state);
            setsConf(ret.data.statewise[1].confirmed)
            setsActive(ret.data.statewise[1].active);
            setsRec(ret.data.statewise[1].recovered)
            setsDea(ret.data.statewise[1].deaths)

            setSName2(ret.data.statewise[16].state);
            setsConf2(ret.data.statewise[16].confirmed)
            setsActive2(ret.data.statewise[16].active);
            setsRec2(ret.data.statewise[16].recovered)
            setsDea2(ret.data.statewise[16].deaths)

            setSName3(ret.data.statewise[10].state);
            setsConf3(ret.data.statewise[10].confirmed)
            setsActive3(ret.data.statewise[10].active);
            setsRec3(ret.data.statewise[10].recovered)
            setsDea3(ret.data.statewise[10].deaths)
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
                    <td>{sName2}</td>
                    <td>{sActive2}</td>
                    <td>{sConf2}</td>
                    <td>{sRec2}</td>
                    <td>{sDea2}</td>
                </tr>
                <tr>
                    <td>{sName3}</td>
                    <td>{sActive3}</td>
                    <td>{sConf3}</td>
                    <td>{sRec3}</td>
                    <td>{sDea3}</td>
                </tr>
            </table>
        </div>
    )
}

export default Api6
