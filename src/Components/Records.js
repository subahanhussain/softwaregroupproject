import React, { useState, useEffect } from 'react';
import logo from './govuklogo.png';
import Button from './Button.js';

function Records() {
    const [medical_records, setRecords] = useState([]);

    useEffect(() => {
        fetch('http://localhost/backend/records.php')
            .then(response => response.json())
            .then(data => setRecords(data));
    }, []);

    return (
        <div>
            <div className="logo-container">
                <img src={logo} alt="Gov.uk" />
            </div>
            <div className="box">
                <br />
                <table style={{ margin: '0 auto' }}>
                    <thead>
                        <tr>
                            <th>NHS Number</th>
                            <th>Forename</th>
                            <th>Surname</th>
                            <th>Postcode</th>
                            <th>DOB</th>
                            <th>Sex</th>
                            <th>Vaccine Batch No.</th>
                            <th>Vaccine Manufacturer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medical_records.map(record => (
                            <tr key={record.nhsNo}>
                                <td>{record.nhsNo}</td>
                                <td>{record.fname}</td>
                                <td>{record.postcode}</td>
                                <td>{record.dob}</td>
                                <td>{record.sex}</td>
                                <td>{record.vaccine_batch_number}</td>
                                <td>{record.vaccine_manufacturer}</td>
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

export default Records;