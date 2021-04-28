import React from 'react'
import { Card, CardContent } from '@material-ui/core';

function MaterialUI() {
    return (
        <div>
            <Card className="material__card">
                <CardContent>
                    <h2>Material Ui Card</h2>
                    <h4>Card Less Valuable Info</h4>
                    <p>Least Valuable</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default MaterialUI
