import axios from "axios";
import React, { useEffect, useState } from "react";

function CovidGrid() {
  const [State, setState] = useState();
  const [Active, setActive] = useState();

  useEffect(() => {
    axios.get("https://api.covid19india.org/data.json").then((res) => {
      console.log(res.data.statewise);
      setState(res.data.statewise);
    });
  });

  function arlert(value) {
    setActive(State[value].active);
  }

  return (
    <div>
      <select onChange={arlert(this.value)}>
        <option value="0">State 0</option>
        <option value="1">State 1</option>
        <option value="2">State 2</option>
        <option value="3">State 3</option>
        <option value="4">State 4</option>
        <option value="5">State 5</option>
      </select>

      <div>
        <h1>recovered</h1>
      </div>

      <div>
        <h1>{Active}</h1>
      </div>
    </div>
  );
}

export default CovidGrid;
