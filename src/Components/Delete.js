import React, { useState } from 'react';
import logo from './govuklogo.png';

function Delete() {
    const [nhsNumber, setNHSNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://localhost:3000/removedb.php', {
            method: 'POST',
            method: 'POST',
            body: data
        })

    return (
        <div>
            <div className="logo-container">
                <img src={logo} alt="Gov.uk" />
            </div>
            <div className="box">
                <br />
                <br />
                <bn />
                <p style={{ fontSize: '0.7em' }}>
                    Enter your NHS number and password to continue.
                </p>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <label>NHS number:</label>
                            <input
                                type="text"
                                value={nhsNumber}
                                onChange={(e) => setNHSNumber(e.target.value)}
                            />
                        </div>
                        <div className="form-row">
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="buttonContainer">
                            <div>
                                <Button type="submit" link="/" label="Delete account" />
                            </div>
                            <div>
                                <Button link="/welcome" label="Go back" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Delete;