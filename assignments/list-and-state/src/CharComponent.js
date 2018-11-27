import React from 'react';
import './App.css';

const charComponent = (props) => {
    return (
        <p className="Char" onClick={props.click}>{props.char}</p>
    );
}

export default charComponent;