import React from "react";
import MaterialUI from "./MaterialUI";
import "./Mui.css";
import { Select, MenuItem } from "@material-ui/core";

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
          <MenuItem value={0}>India</MenuItem>
          <MenuItem value={1}>Madhya Pradesh</MenuItem>
          <MenuItem value={2}>Uttar Pradesh</MenuItem>
          <MenuItem value={3}>Rajasthan</MenuItem>
          <MenuItem value={4}>Delhi</MenuItem>
          <MenuItem value={5}>Punjab</MenuItem>
          <MenuItem value={6}>Telangana</MenuItem>
          <MenuItem value={7}>Kerala</MenuItem>
          <MenuItem value={8}>Karnataka</MenuItem>
          <MenuItem value={9}>Assam</MenuItem>
          <MenuItem value={10}>Tamil Nadu</MenuItem>
          <MenuItem value={11}>Gujarat</MenuItem>
          <MenuItem value={12}>Jammu & Kashmir</MenuItem>
          <MenuItem value={13}>Chandigarh</MenuItem>
          <MenuItem value={14}>Maharashtra</MenuItem>
        </Select>
      </div>

      <MaterialUI />
    </div>
  );
}

export default Mui;
