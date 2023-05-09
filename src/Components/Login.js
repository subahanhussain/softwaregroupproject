import React, { useState } from 'react';
import logo from './govuklogo.png';
import Button from './Button.js';
import './stylesheet.css';

function Login({ setLoggedIn, setAdmin }) {
    const [nhsNo, setNHSNumber] = useState('');
    const [password, setPassword] = useState('');

    setAdmin(true);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const response = await fetch('http://localhost/backend/login.php', {
            method: 'POST',
            body: data
        });
        const result = await response.json();

        if (result.isLoggedIn) {
            if (result.isAdmin) {
                setAdmin(true);
            } else {
                setLoggedIn(true);
            }
        }
    }

    return (
        <div>
            <div className="logo-container">
                <img src={logo} alt="Gov.uk" />
            </div>
            <div className="box">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <br />
                        <br />
                        <br />
                        <br />
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
                        <br />
                        <br />
                        <div className="buttonContainer">
                            <div>
                                <Button type="submit" label="Log in" />
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

export default Login;