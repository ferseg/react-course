import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.username}</p>
            <p>{props.first}</p>
            <p>{props.second}</p>
        </div>
    );
}

export default userOutput;