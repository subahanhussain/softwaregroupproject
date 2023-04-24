import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
    return (
        <>
            <Link to={props.link}><button className="normal-button">{props.label}</button></Link>
            <br />
        </>
    );
}

export default Button;