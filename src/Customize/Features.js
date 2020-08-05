import Selection from './Selection.js'
import React from 'react'
import slugify from 'slugify';
import {Store} from './Store.js';


export default function Features(props) {
    return(
        Object.keys(Store).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            
            const options = Store[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <Selection
                    key={itemHash}
                    itemHash={itemHash}
                    selected={props.selected}
                    feature={feature}
                    item={item}
                    currencyFormat={props.currencyFormat}
                    handleUpdate={props.handleUpdate}
                    />
                );
            });
            return (
                <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
                </fieldset>
            );
        })
    )
}

