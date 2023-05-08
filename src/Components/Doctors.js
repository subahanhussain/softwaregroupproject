import React, { useState, useEffect } from 'react';
import logo from './govuklogo.png';
import Button from './Button.js';

function Doctors() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost/backend/doctors.php')
            .then(response => response.json())
            .then(data => setDoctors(data));
    }, []);

    return (
        <div>
            <div className="logo-container">
                <img src={logo} alt="Gov.uk" />
            </div>
            <div className="box">
                <br/>
                <table style={{ margin: '0 auto' }}>
                    <thead>
                        <tr>
                            <th>Doctor ID</th>
                            <th>Doctor Name</th>
                            <th>Doctor Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map(doctor => (
                            <tr key={doctor.doctor_id}>
                                <td>{doctor.doctor_id}</td>
                                <td>{doctor.doctor_name}</td>
                                <td>{doctor.doctor_email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br/>
                <div className="buttonContainer">
                    <div>
                        <Button link="/welcome" label="Go back" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Doctors;