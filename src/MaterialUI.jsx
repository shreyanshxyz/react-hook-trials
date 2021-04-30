import React from "react";
import "./MaterialUI.css";
import { Card, CardContent } from "@material-ui/core";
// import PropTest from "./PropTest";

function MaterialUI(props) {
  return (
    <>
      <div className="card__container1">
        <Card className="material__card">
          <CardContent>
            <h2>Confirmed</h2>
            <h4>+1000</h4>
            <h3>31000</h3>
          </CardContent>
        </Card>

        <Card className="material__card">
          <CardContent>
            <h2>Active Cases</h2>
            <h4>+1000</h4>
            <h3>31000</h3>
          </CardContent>
        </Card>

        <Card className="material__card">
          <CardContent>
            <h2>Recovered</h2>
            <h4>+1000</h4>
            <h3>31000</h3>
          </CardContent>
        </Card>
      </div>

      <div className="card__container2">
        <Card className="material__card">
          <CardContent>
            <h2>Deaths</h2>
            <h4>+1000</h4>
            <h3>31000</h3>
          </CardContent>
        </Card>

        <Card className="material__card">
          <CardContent>
            <h2>Tested</h2>
            <h4>+1000</h4>
            <h3>31000</h3>
          </CardContent>
        </Card>

        <Card className="material__card">
          <CardContent>
            <h2>Vaccinated</h2>
            <h4>+1000</h4>
            <h3>31000</h3>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default MaterialUI;
