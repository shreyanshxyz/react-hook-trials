import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./CGraph.css";

function CGraph() {
  const [chartData, setchartData] = useState();

  const chart = () => {
    let confCase = [];
    let upDate = [];

    axios
      .get("https://api.covid19india.org/data.json")
      .then((res) => {
        // console.log(res.data.cases_time_series);
        const lastDate = res.data.cases_time_series.length - 1;
        var i;
        for (i = 0; i < lastDate; i++) {
          confCase.push(parseInt(res.data.cases_time_series[i].dailyconfirmed));
          upDate.push(res.data.cases_time_series[i].dateymd);
        }
        setchartData({
          labels: upDate,
          datasets: [
            {
              label: "Covid Cases",
              data: confCase,
              backgroundColor: "purple",
              borderWidth: 4,
              fill: true,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(confCase, upDate);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      <h1>Graph</h1>
      <p>Using Chart.js (preferably)</p>
      <div className="graph__static">
        <Line data={chartData} />
      </div>
    </div>
  );
}

export default CGraph;
