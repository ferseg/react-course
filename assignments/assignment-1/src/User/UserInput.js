import React from 'react';

const userInput = (props) => {
    const style = {
        color: 'red',
        width: '30%',
        fontSize: '20 px'
    };
    
    return (
        <input style={style} type="text" onChange={props.onChangeHandler} value={props.value}/>
    );
}

export default userInput;