import React from "react";
import "./Mui.css";
import { Select, MenuItem } from "@material-ui/core";

function Mui() {
  return (
    <div className="drp__test">
      <div className="form__container">
        <Select defaultValue="0" autoWidth={true}>
          <MenuItem value={1}>Madhya Pradesh</MenuItem>
          <MenuItem value={2}>Uttar Pradesh</MenuItem>
          <MenuItem value={3}>Rajasthan</MenuItem>
          <MenuItem value={4}>Delhi</MenuItem>
          <MenuItem value={5}>Punjab</MenuItem>
          <MenuItem value={6}>Telangana</MenuItem>
          <MenuItem value={7}>Kerala</MenuItem>
          <MenuItem value={8}>Karnataka</MenuItem>
          <MenuItem value={9}>Assam</MenuItem>
          <MenuItem value={0}>Select a state</MenuItem>
        </Select>
      </div>

      <div>Card</div>
    </div>
  );
}

export default Mui;
