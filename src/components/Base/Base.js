import React from 'react';
import './Base.css';

const base = (props) => {
    
    return (
        <div className="Base">
            <div className="BaseLabel">{props.id} - {props.name}</div>
            <div className="BaseFlexContainer">
                <div className="BaseCurrency"><strong>{props.id}</strong></div>
                <div className="BaseValue">
                    <input 
                        className="BaseValueInput" 
                        type="text" pattern="[0-9]" 
                        value={props.value}
                        onChange={props.valueChanged}/>
                </div>
                <div style={{clear: 'both'}}></div>
            </div>   
        </div>
    );
}

export default React.memo(base);