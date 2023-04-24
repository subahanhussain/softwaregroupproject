import React, { useState } from 'react';
import logo from './govuklogo.png';
import Button from './Button.js';
import './stylesheet.css';

function Login({ setLoggedIn, setAdmin }) {
    const [nhsNumber, setNHSNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {

        if (nhsNumber === 'admin' && password === 'admin') {
            setAdmin(true);
        } else {
            // do login logic
            setLoggedIn(true);
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
                            <input type="text" value={nhsNumber} onChange={(e) => setNHSNumber(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label>Password:</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="buttonContainer">
                            <div>
                                <Button type="submit" link="/welcome" label="Log in" />
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