import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./CGraph.css";

function CGraph() {
  const [chartData, setchartData] = useState();
  const [GraphRecovered, GraphsetRecovered] = useState();
  const [dead, setdead] = useState();

  const chart = () => {
    let confCase = [];
    let recCase = [];
    let deadCase = [];
    let upDate = [];

    axios
      .get("https://api.covid19india.org/data.json")
      .then((res) => {
        // console.log(res.data.cases_time_series);
        const lastDate = res.data.cases_time_series.length - 1;
        var i;
        for (i = 0; i < lastDate; i++) {
          confCase.push(parseInt(res.data.cases_time_series[i].dailyconfirmed));
          recCase.push(parseInt(res.data.cases_time_series[i].dailyrecovered));
          deadCase.push(parseInt(res.data.cases_time_series[i].dailydeceased));
          upDate.push(res.data.cases_time_series[i].dateymd);
        }
        setchartData({
          labels: upDate,
          datasets: [
            {
              label: "Covid Cases",
              data: confCase,
              backgroundColor: "#ff073a",
              borderWidth: 4,
              fill: true,
            },
          ],
        });

        GraphsetRecovered({
          labels: upDate,
          datasets: [
            {
              label: "Recoveries",
              data: recCase,
              backgroundColor: "rgba(40, 167, 69, 0.6)",
              borderWidth: 4,
              fill: true,
            },
          ],
        });

        setdead({
          labels: upDate,
          datasets: [
            {
              label: "Deaths",
              data: deadCase,
              backgroundColor: "#6c757d",
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

  const conf = () => {
    var x = document.getElementById("confirmed");
    var y = document.getElementById("recovered");
    var z = document.getElementById("deaths");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    }
    document.getElementById("confirmed").style.display = "block";
    document.getElementById("recovered").style.display = "none";
    document.getElementById("deaths").style.display = "none";
  };

  const reco = () => {
    var x = document.getElementById("confirmed");
    var y = document.getElementById("recovered");
    var z = document.getElementById("deaths");
    if (y.style.display === "none") {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
    }

    document.getElementById("confirmed").style.visibility = "none";
    document.getElementById("recovered").style.visibility = "block";
    document.getElementById("deaths").style.visibility = "none";
  };

  const ded = () => {
    var y = document.getElementById("recovered");
    var x = document.getElementById("confirmed");
    var z = document.getElementById("deaths");
    if (z.style.display === "none") {
      y.style.display = "none";
      x.style.display = "none";
      z.style.display = "block";
    }

    document.getElementById("confirmed").style.visibility = "none";
    document.getElementById("recovered").style.visibility = "none";
    document.getElementById("deaths").style.visibility = "block";
  };

  return (
    <div>
      <h1>Graph</h1>
      <p>Using Chart.js (preferably)</p>
      <div className="three__buttons">
        <button onClick={conf}>Confirmed</button>
        <button onClick={reco}>Recovered</button>
        <button onClick={ded}>Deaths</button>
      </div>
      <div className="graph__container">
        <div
          style={{ display: "inline" }}
          id="confirmed"
          className="graph__static"
        >
          <Line data={chartData} />
        </div>
        <div
          style={{ display: "none" }}
          id="recovered"
          className="graph__static"
        >
          <Line data={GraphRecovered} />
        </div>
        <div style={{ display: "none" }} id="deaths" className="graph__static">
          <Line data={dead} />
        </div>
      </div>
    </div>
  );
}

export default CGraph;
