import React from 'react';
import { Link } from 'react-router-dom';

function Greenbuttonleft(props) {
    return (
        <>
            <Link to={props.link}><button className="greenbuttonleft">{props.label}</button></Link>
            <br />
        </>
    );
}

export default Greenbuttonleft;