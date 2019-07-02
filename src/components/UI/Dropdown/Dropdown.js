import React from 'react';
import './Dropdown.css';

const dropdown = (props) => {
    
    return (
        
        <div className="Dropdown">
            <div className="DropdownLeft">
                <select 
                    className="DropdownInput" 
                    value={props.value} 
                    onChange={props.onChange}
                >
                    {/* rendering options */}
                    {Object.keys(props.options)
                        .map(id => {
                            return (
                                <option 
                                    key={props.options[id].value}
                                    value={props.options[id].value}>
                                    {props.options[id].displayedValue}
                                </option>)
                        })}
                    
                </select>
            </div>
            <div className="DropdownRight">
                <button className="DropdownButton" onClick={props.onClickBtn}>Submit</button>
            </div>
            <div style={{clear: 'both'}}></div>
        </div>
    );
}

export default React.memo(dropdown);