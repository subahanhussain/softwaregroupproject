import React, { useState } from 'react';
import logo from './govuklogo.png';
import Button from './Button.js';

function Booking({ setDone }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [reason, setReason] = useState('');
    const [doctor, setDoctor] = useState('');

    setDone(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        // do booking logic
    }

    return (
        <div>
            <div className="logo-container">
                <img src={logo} alt="Gov.uk" />
            </div>
            <div className="box">
                <p>Enter your desired appointment details</p>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <br />
                        <div className="form-row">
                            <label>Desired date:</label>
                            <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label>Desired time:</label>
                            <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label>Reasoning:</label>
                            <input type="text" value={reason} onChange={(e) => setReason(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label>Desired doctor:</label>
                            <input type="text" value={doctor} onChange={(e) => setDoctor(e.target.value)} />
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="buttonContainer">
                            <div>
                                <Button type="submit" link="/done" label="Request appointment" />
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

export default Booking;