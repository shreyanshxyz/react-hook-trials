import React, {useEffect, useState} from 'react';
import './Api5.css';
import axios from 'axios';

function Api5() {

    const c19 = "https://api.covid19india.org/data.json"
    const [Conf, setConf] = useState();
    const [TotConf, setTotConf] = useState();
    const [Det, setDet] = useState();
    const [TotDet, setTotDet] = useState();
    const [Rec, setRec] = useState();
    const [TotRec, setTotRec] = useState();
    const [Act, setAct] = useState();

    useEffect(() => {

        async function Fetch(){
            const resu = await axios.get(c19);

        // CountryWise Constants
        const lastDate = resu.data.cases_time_series.length - 1;

        setConf(resu.data.cases_time_series[lastDate].dailyconfirmed);
        setTotConf(resu.data.cases_time_series[lastDate].totalconfirmed);

        setDet(resu.data.cases_time_series[lastDate].dailydeceased);
        setTotDet(resu.data.cases_time_series[lastDate].totaldeceased);

        setRec(resu.data.cases_time_series[lastDate].dailyrecovered);
        setTotRec(resu.data.cases_time_series[lastDate].totalrecovered);

        setAct(TotConf - TotDet - TotRec);
        }
        // return () => {
        //     cleanup
        // }
        Fetch();
    });

    return (
        <div className="c19__india">
            <div className="case__box">
                <h1>{Conf}</h1>
                <h3>{TotConf}</h3>
            </div>

            <div className="case__box">
                <h1>{Act}</h1>
            </div>

            <div className="case__box">
                <h1>{Rec}</h1>
                <h3>{TotRec}</h3>
            </div>

            <div className="case__box">
                <h1>{Det}</h1>
                <h3>{TotDet}</h3>
            </div>
        </div>
    )
}

export default Api5
