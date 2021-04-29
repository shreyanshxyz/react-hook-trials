import React from 'react';
import './Mui.css';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

function Mui() {
    return (
        <div className="drp__test">
            <div>
                <FormControl style={{minWidth: 320}}>
                <InputLabel>Select Your State</InputLabel>
                <Select>
                    <MenuItem>Madhya Pradesh</MenuItem>
                    <MenuItem>Porps</MenuItem>
                    <MenuItem>Bruh Bruh Bruh Bruh</MenuItem>
                    <MenuItem>Bruh Bruh Bruh Bruh</MenuItem>
                    <MenuItem>Bruh</MenuItem>
                    <MenuItem>Bruh Bruh Bruh Bruh</MenuItem>
                    <MenuItem>Bruh</MenuItem>
                </Select>
                </FormControl>
            </div>

            <div>
                Card
            </div>
        </div>
    )
}

export default Mui
