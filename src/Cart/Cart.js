import React from 'react'
import Total from './Total';
import Summary from './Summary';

export default function Cart(props){

    return(
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary 
            selected={props.selected}
            currencyFormat={props.currencyFormat}
            />
            <Total 
            selected={props.selected}
            currencyFormat={props.currencyFormat}
            />
        </section>
    )
}