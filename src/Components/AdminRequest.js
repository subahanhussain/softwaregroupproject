import React, { useState, useEffect } from 'react';
import logo from './govuklogo.png';
import Button from './Button.js';

function AdminRequest() {
    const [prescriptionRequests, setPrescriptionRequests] = useState([]);

    useEffect(() => {
        fetch('http://localhost/viewrequests.php')
            .then(response => response.json())
            .then(data => setPrescriptionRequests(data));
    }, []);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const selectedRequests = Array.from(event.target.elements)
            .filter(element => element.name === 'request' && element.checked)
            .map(element => element.value);

        fetch('http://localhost/backend/approverequests.php', {
            method: 'POST',
            body: new URLSearchParams({ selected_requests: selectedRequests }),
        })
            .then(() => {
                fetch('http://localhost/backend/viewrequests.php')
                    .then(response => response.json())
                    .then(data => setPrescriptionRequests(data));
            });
    };

    return (
        <div>
            <div className="logo-container">
                <img src={logo} alt="Gov.uk" />
            </div>
            <div className="box">
                <br/>
                <form onSubmit={handleFormSubmit}>
                    <table style={{ margin: '0 auto' }}>
                        <thead>
                            <tr>
                                <th>NHS Number</th>
                                <th>Prescription</th>
                                <th>Repeat</th>
                                <th>Approve</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prescriptionRequests.map(request => (
                                <tr key={request.id}>
                                    <td>{request.nhsNo}</td>
                                    <td>{request.prescription}</td>
                                    <td>{request.is_repeat ? 'Yes' : 'No'}</td>
                                    <td>
                                        <input type="checkbox" name="request" value={request.id} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br/>
                    <div className="buttonContainer">
                        <div>
                            <Button type="submit" label="Approve selected" />
                        </div>
                        <div style={{ marginRight: '120px' }}>
                            <Button link="/adminwelcome" label="Go back" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminRequest;