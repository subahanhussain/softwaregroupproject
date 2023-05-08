import React, { useState } from 'react';
import logo from './govuklogo.png';
import Button from './Button.js';

function Request({ setDone }) {
    const [prescription, setPrescription] = useState('');
    const [isRepeat, setIsRepeat] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://localhost/backend/addrequest.php', {
            method: 'POST',
            body: data,
        }).then((response) => {
            if (response.ok) {
                setDone(true);
            }
        });
    };

    return (
        <div>
            <div className="logo-container">
                <img src={logo} alt="Gov.uk" />
            </div>
            <div className="box">
                <p>Enter your prescription details</p>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <br />
                        <div className="form-row">
                            <label>Desired prescription:</label>
                            <input
                                type="text"
                                value={prescription}
                                onChange={(e) => setPrescription(e.target.value)}
                            />
                        </div>
                        <br />
                        <br />
                        <div className="form-row">
                            <label>Is this a repeat prescription?</label>
                            <input
                                type="radio"
                                name="isRepeat"
                                value="yes"
                                checked={isRepeat === true}
                                onChange={() => setIsRepeat(true)}
                            />{' '}
                            Yes
                            <input
                                type="radio"
                                name="isRepeat"
                                value="no"
                                checked={isRepeat === false}
                                onChange={() => setIsRepeat(false)}
                            />{' '}
                            No
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="buttonContainer">
                            <div>
                                <Button type="submit" link="/done" label="Request prescription" />
                            </div>
                            <div style={{ marginRight: '120px' }}>
                                <Button link="/welcome" label="Go back" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Request;