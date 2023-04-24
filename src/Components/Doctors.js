import React from 'react';
import logo from './govuklogo.png';

function Doctors() {
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

export default Doctors;

// display the list of doctors and their available appointment slots