import React from 'react';
import './Currency.css';

const currency = (props) => {
    return (
        <div className="CurrencyBox">
            <div className="Currency"> 
                <div className="CurrencyID">
                    USD
                </div>
                <div className="CurrencyValue">
                    10.000
                </div>
                <div style={{clear: 'both'}}></div>
                <div className="CurrencyLabel">
                    <strong>IDR - Indonesian Rupiah</strong>
                </div>
                <div className="CurrencyRate">
                    1 USD = IDR 10.000
                </div>
            </div>
            {/* <div className="CurrencyButton">( - )</div> */}
            <button className="CurrencyButton"><strong>( - )</strong></button>
        </div>
    );
}

export default currency;