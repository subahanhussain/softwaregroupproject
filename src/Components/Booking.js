import React, { useState } from 'react';
import logo from './govuklogo.png';
import Button from './Button.js';

function Booking({ setDone }) {
    const [nhsNo, setNHSNumber] = useState('');
    const [b_date, setDate] = useState('');
    const [b_time, setTime] = useState('');
    const [b_reason, setReason] = useState('');
    const [b_doctor, setDoctor] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://localhost/backend/addbooking.php', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then(data => {
                if (data.booked) {
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
                <p>Enter your desired appointment details</p>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <br />
                        <div className="form-row">
                            <label>NHS Number:</label>
                            <input type="text" name="nhsNo" value={nhsNo} onChange={(e) => setNHSNumber(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label>Desired date:</label>
                            <input type="text" name="b_date" value={b_date} onChange={(e) => setDate(e.target.value)} required />
                        </div>
                        <div className="form-row">
                            <label>Desired time:</label>
                            <input type="text" name="b_time" value={b_time} onChange={(e) => setTime(e.target.value)} required />
                        </div>
                        <div className="form-row">
                            <label>Reasoning:</label>
                            <input type="text" name="b_reason" value={b_reason} onChange={(e) => setReason(e.target.value)} required />
                        </div>
                        <div className="form-row">
                            <label>Desired doctor:</label>
                            <input type="text" name="b_doctor" value={b_doctor} onChange={(e) => setDoctor(e.target.value)} required />
                        </div>
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