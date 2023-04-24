import React from 'react';
import { Link } from 'react-router-dom';

function Greenbuttonright(props) {
    return (
        <>
            <Link to={props.link}><button className="greenbuttonright">{props.label}</button></Link>
            <br />
        </>
    );
}

export default Greenbuttonright;