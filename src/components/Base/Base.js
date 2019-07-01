import React from 'react';
import './Base.css';

const base = (props) => {
    return (
        <div className="Base">
            <div className="BaseLabel">USD - United States Dollars</div>
            <div className="BaseFlexContainer">
                <div className="BaseCurrency"><strong>USD</strong></div>
                <div className="BaseValue"><strong>10.000</strong></div>
                <div style={{clear: 'both'}}></div>
            </div>   
        </div>
    );
}

export default base;