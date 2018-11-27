import React from 'react';

const validatonComponent = (props) => {
    let validation = 'Text too short';
    if (props.length > 5) {
        validation = 'Text long enough';
    }
    return (
        <p>{validation}</p>
    );
}

export default validatonComponent;