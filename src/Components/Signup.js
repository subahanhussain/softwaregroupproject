import React, { useState } from 'react';
import logo from './govuklogo.png';
import Button from './Button.js';
import './stylesheet.css';

function Signup({ setLoggedIn }) {
    const [fname, setFirstName] = useState('');
    const [lname, setLastName] = useState('');
    const [nhsNo, setNHSNumber] = useState('');
    const [mobNo, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [postcode, setPostcode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://localhost/backend/addtodb.php', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then(data => {
                if (data.isLoggedIn) {
                    setLoggedIn(true);
                }
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <div className="logo-container">
                <img src={logo} alt="Gov.uk" />
            </div>
            <div className="box">
                <div className="form-container">
                    <form method="POST" action="http://localhost/backend/addtodb.php" onSubmit={handleSubmit}>
                        <br />
                        <div className="form-row">
                            <label>First Name:</label>
                            <input type="text" name="fname" value={fname} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label>Last Name:</label>
                            <input type="text" name="lname" value={lname} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label>NHS Number:</label>
                            <input type="text" name="nhsNo" value={nhsNo} onChange={(e) => setNHSNumber(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label>Phone Number:</label>
                            <input type="text" name="mobNo" value={mobNo} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label>Email:</label>
                            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label>Postcode:</label>
                            <input type="text" name="postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label>Password:</label>
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label>Confirm Password:</label>
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <br />
                        <div className="buttonContainer">
                            <div>
                                <Button type="submit" link="/welcome" label="Sign up" />
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

export default Signup;