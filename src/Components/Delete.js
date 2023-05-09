import React, { useState } from 'react';
import logo from './govuklogo.png';
import Button from './Button.js';

function Delete() {
    const [nhsNo, setNHSNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const response = await fetch('http://localhost/backend/removedb.php', {
            method: 'POST',
            body: data,
        });

        if (response.ok) {
            alert('Patient record successfully deleted.');
        } else {
            alert('An error occurred while deleting the patient record.');
        }
    };

    return (
        <div>
            <div className="logo-container">
                <img src={logo} alt="Gov.uk" />
            </div>
            <div className="box">
                <br />
                <br />
                <p style={{ fontSize: '0.7em' }}> Enter your NHS number and password to continue.</p>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <br />
                        <br />
                        <div className="form-row">
                            <label>NHS number:</label>
                            <input type="text" name="nhsNo" value={nhsNo} onChange={(e) => setNHSNumber(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label>Password:</label>
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <br />
                        <br />
                        <div className="buttonContainer">
                            <div>
                                <Button type="submit" label="Delete record" />
                            </div>
                            <div style={{ marginRight: '120px' }}>
                                <Button link="/" label="Go back" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Delete;