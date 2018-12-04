import React from 'react';

const withClasses = (props) => (
    <div className={props.styles}>
        {props.children}
    </div>
);

export default withClasses;