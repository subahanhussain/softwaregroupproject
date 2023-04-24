import React from 'react';
import logo from './govuklogo.png';

function Records() {
    return (
        <div>
            <div className="logo-container">
                <img src={logo} alt="Gov.uk" />
            </div>
            <div className="box">
            </div>
        </div>
    );
}

export default Records;

// display medical records pertaining to the nhsnumber of the user currently logged in