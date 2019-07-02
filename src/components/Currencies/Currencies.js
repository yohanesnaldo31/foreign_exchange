import React from 'react';
import './Currencies.css';
import Currency from './Currency/Currency';

const currencies = (props) => {
    let displayedCurrencies = Object.keys(props.currencies)
        .map(curKey => {
            if(props.currencies[curKey].visible===true){
                return <Currency 
                    key={curKey}
                    value={props.value} 
                    id={curKey} 
                    name={props.currencies[curKey].name}
                    rate={props.currencies[curKey].rate}
                    hidCurrency={() => props.hidCurrency(curKey)}
                />
            }
            return null;
        })
    return (
        <div className="Currencies">
            {displayedCurrencies}
        </div>
    )
}

export default currencies;