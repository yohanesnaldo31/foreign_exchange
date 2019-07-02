import React from 'react';
import NumberFormat from 'react-number-format';
import './Currency.css';

const currency = (props) => {
    return (
        <div className="CurrencyBox">
            <div className="Currency"> 
                <div className="CurrencyID">
                    {props.id}
                </div>
                <div className="CurrencyValue">
                    <NumberFormat 
                        value={(props.value * props.rate).toFixed(4)}
                        displayType={'text'}
                        thousandSeparator={true}
                    />
                    
                </div>
                <div style={{clear: 'both'}}></div>
                <div className="CurrencyLabel">
                    <strong>{props.id} - {props.name}</strong>
                </div>
                <div className="CurrencyRate">
                    1 USD = {props.id} <NumberFormat 
                        value={props.rate.toFixed(4)}
                        displayType={'text'}
                        thousandSeparator={true}
                    />
                </div>
            </div>
            
            <button className="CurrencyButton" onClick={props.hidCurrency}><strong>( - )</strong></button>
        </div>
    );
}

export default currency;