import React from 'react';
import './Currencies.css';
import Currency from './Currency/Currency';

const currencies = (props) => {
    return (
        <div className="Currencies">
            <Currency />
        </div>
    )
}

export default currencies;