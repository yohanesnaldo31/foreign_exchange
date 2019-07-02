import React from 'react';
import './Base.css';

const base = (props) => {
    return (
        <div className="Base">
            <div className="BaseLabel">{props.base.id} - {props.base.name}</div>
            <div className="BaseFlexContainer">
                <div className="BaseCurrency"><strong>{props.base.id}</strong></div>
                <div className="BaseValue">
                    <input 
                        className="BaseValueInput" 
                        type="text" pattern="[0-9]" 
                        value={props.base.value}
                        onChange={props.valueChanged}/>
                </div>
                <div style={{clear: 'both'}}></div>
            </div>   
        </div>
    );
}

export default base;