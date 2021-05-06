import React, { useState } from "react";
import { Line } from "react-chartjs-2";

function CGraph() {
  const [chartData, setchartData] = useState();

  const chart = () => {
    setchartData({
      labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      datasets: [
        {
          label: "Covid Cases",
        },
      ],
    });
  };
  return (
    <div>
      <h1>Graph</h1>
      <p>Using Chart.js (preferably)</p>
    </div>
  );
}

export default CGraph;
