import React from 'react'
import './MaterialUI.css'
import { Card, CardContent } from '@material-ui/core';

function MaterialUI() {
    return (
        <div>
            <Card variant="outlined" className="material__card">
                <CardContent className="card__content">
                    <h2>Material Ui Card</h2>
                    <h4>Card Less Valuable Info</h4>
                    <p>Least Valuable</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default MaterialUI
