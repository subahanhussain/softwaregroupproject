import React, { useEffect } from 'react';
import logo from './govuklogo.png';

function Done() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.replace('/welcome');
        }, 7000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className="logo-container">
                <img src={logo} alt="Gov.uk" />
            </div>
            <div className="box">
                <br />
                <br />
                <bn />
                <p style={{ fontSize: '0.7em' }}>Thank you for using our services.</p>
                <p style={{ fontSize: '0.7em' }}>You will recieve an email approving or denying your request shortly.</p>
                <p style={{ fontSize: '0.7em' }}>You will now be taken back to the dashboard.</p>
            </div>
        </div>
    );
}

export default Done;