import React from "react";
import "./Mui.css";
import { Card, CardContent, Select, MenuItem } from "@material-ui/core";

function Mui() {
  return (
    <div className="drp__test">
      <div className="form__container">
        <Select
          className="drop__style"
          defaultValue="0"
          variant="outlined"
          autoWidth={true}
        >
          <MenuItem value={1}>Madhya Pradesh</MenuItem>
          <MenuItem value={2}>Uttar Pradesh</MenuItem>
          <MenuItem value={3}>Rajasthan</MenuItem>
          <MenuItem value={4}>Delhi</MenuItem>
          <MenuItem value={5}>Punjab</MenuItem>
          <MenuItem value={6}>Telangana</MenuItem>
          <MenuItem value={7}>Kerala</MenuItem>
          <MenuItem value={8}>Karnataka</MenuItem>
          <MenuItem value={9}>Assam</MenuItem>
          <MenuItem value={0}>India</MenuItem>
        </Select>
      </div>

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
    </div>
  );
}

export default Mui;
