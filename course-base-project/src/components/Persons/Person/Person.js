import React from 'react';
import styles from './Person.css';

import { AuthContext } from '../../../containers/App';

const person = (props) => {
    return (
        <div className={styles.Person}>
            <AuthContext.Consumer>
                {auth => auth ? <p>It's authenticated</p> : null}
            </AuthContext.Consumer>
            <p onClick={props.click}>I'm {props.name} and I'm {props.years} years old!</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>

    );
}

export default person;