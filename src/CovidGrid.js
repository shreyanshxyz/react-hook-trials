import axios from "axios";
import React, { useState } from "react";

function CovidGrid() {
  //   const [State, setState] = useState([]);
  const [Active, setActive] = useState([]);
  const [Recovered, setRecovered] = useState([]);
  const [Confirmed, setConfirmed] = useState([]);

  //   useEffect(() => {
  //     axios.get("https://api.covid19india.org/data.json").then((res) => {
  //       console.log(res.data.statewise);
  //       setState(res.data.statewise);
  //       //   setActive(res.data.statewise[{ value }].active);
  //     });
  //   });

  const jah = (event) => {
    axios.get("https://api.covid19india.org/data.json").then((res) => {
      console.log(res.data.statewise);
      //   setState(res.data.statewise);
      setActive(res.data.statewise[event.target.value].active);
      setConfirmed(res.data.statewise[event.target.value].confirmed);
      setRecovered(res.data.statewise[event.target.value].recovered);
    });
  };

  return (
    <div>
      <select onChange={jah}>
        <option value={0}>Total</option>
        <option value={1}>Maharashtra</option>
        <option value={2}>Kerala</option>
        <option value={3}>Karnataka</option>
        <option value={4}>Andhra Pradesh</option>
        <option value={5}>Tamil Nadu</option>
      </select>

      <div>
        <h1>{Recovered}</h1>
      </div>

      <div>
        <h1>{Confirmed}</h1>
      </div>

      <div>
        <h1>{Active}</h1>
      </div>
    </div>
  );
}

export default CovidGrid;
