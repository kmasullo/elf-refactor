import React from 'react';
import Features from './Features.js';


export default function Customize (props) {

    return(
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features 
            selected={props.selected}
            handleUpdate={props.handleUpdate}
            currencyFormat={props.currencyFormat}
            />
        </form>
    )
    
}
