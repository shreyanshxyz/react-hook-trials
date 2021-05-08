import React, { useEffect, useState } from "react";
import "./BarGraph.css";
import { Bar } from "react-chartjs-2";
import axios from "axios";

function BarGraph() {
  const [stateData, setstateData] = useState();

  const jah = (event) => {
    let confCase = [];
    let recCase = [];
    let deadCase = [];
    axios
      .get("https://api.covid19india.org/data.json")
      .then((res) => {
        // console.log(res.data.statewise);
        const lastDate = res.data.statewise.length - 1;
        var i;
        for (i = 0; i < lastDate; i++) {
          confCase.push(parseInt(res.data.statewise[i].confirmed));
          recCase.push(parseInt(res.data.statewise[i].recovered));
          deadCase.push(parseInt(res.data.statewise[i].deaths));
          //   upDate.push(res.data.cases_time_series[i].dateymd);
        }
        setstateData({
          labels: "statename",
          datasets: [
            {
              label: "Covid Cases",
              data: [
                confCase[event.target.value],
                recCase[event.target.value],
                deadCase[event.target.value],
              ],
              backgroundColor: ["#ff073a", "green", "gray"],
              borderWidth: 4,
              fill: true,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(confCase);
  };

  //   const jah = (event) => {
  //     axios.get("https://api.covid19india.org/data.json").then((res) => {
  //       console.log(res.data.statewise);
  //       //   setState(res.data.statewise);
  //       setActive(res.data.statewise[event.target.value].active);
  //       setConfirmed(res.data.statewise[event.target.value].confirmed);
  //       setRecovered(res.data.statewise[event.target.value].recovered);
  //     });
  //   };

  useEffect(() => {
    jah();
  }, []);
  return (
    <div>
      <h1>Bar Graph</h1>
      <select onChange={jah}>
        <option value="none" selected disabled hidden>
          Select A State
        </option>
        <option value={0}>Total</option>
        <option value={1}>Maharashtra</option>
        <option value={2}>Kerala</option>
        <option value={3}>Karnataka</option>
        <option value={4}>Andhra Pradesh</option>
        <option value={5}>Tamil Nadu</option>
      </select>
      <Bar data={stateData} />
    </div>
  );
}

export default BarGraph;
