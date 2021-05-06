import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./CGraph.css";

function CGraph() {
  const [chartData, setchartData] = useState();

  const chart = () => {
    setchartData({
      labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      datasets: [
        {
          label: "Covid Cases",
          data: [31, 55, 1, 23, 87],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      <h1>Graph</h1>
      <p>Using Chart.js (preferably)</p>
      <div className="graph__static">
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Graph Static", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxtickslimit: 10,
                    beginatzero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
}

export default CGraph;
