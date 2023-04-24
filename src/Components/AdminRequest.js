import React from 'react';
import logo from './govuklogo.png';

function AdminRequest() {
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

export default AdminRequest;

// approve or deny prescription requests