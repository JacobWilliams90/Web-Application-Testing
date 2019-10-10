import React, { useState } from 'react'

function Display(props) {

    return (
        <div>
            <section>
                <h2>Balls</h2>
                <p>{props.ball}</p>
            </section>
            <section>
                <h2>Strikes</h2>
                <p>{props.strike}</p>
            </section>
            <section>
                <h2>Out</h2>
                <p>{props.out}</p>
            </section>      
        </div>
    )
}

export default Display
