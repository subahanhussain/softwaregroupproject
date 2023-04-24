import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './Components/govuklogo.png';
import Button from './Components/Button.js';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import './Components/stylesheet.css';
import Welcome from './Components/Welcome.js';
import Booking from './Components/Booking.js';
import Records from './Components/Records.js';
import Doctors from './Components/Doctors.js';
import Request from './Components/Request.js';
import Done from './Components/Done.js';
import AdminWelcome from './Components/AdminWelcome';
import AdminBooking from './Components/AdminBooking';
import AdminRequest from './Components/AdminRequest';

function App() {
    const [isLoggedIn, setLoggedIn] = React.useState(false);
    const [isAdmin, setAdmin] = React.useState(false);
    const [isDone, setDone] = React.useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setAdmin={setAdmin} />} />
                <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} />} />
                <Route path="/welcome" element={isLoggedIn ? <Welcome /> : (
                    <>
                        <Login setLoggedIn={setLoggedIn} />
                        <Signup setLoggedIn={setLoggedIn} />
                    </>
                )} />
                <Route path="/booking" element={<Booking setDone={setDone} />} />
                <Route path="/records" element={<Records />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/request" element={<Request setDone={setDone} />} />
                <Route path="/done" element={isDone ? <Done /> : (
                    <>
                    <Booking setDone={setDone} />
                    <Request setDone={setDone} />
                    </>
                )} />
                <Route path="/adminwelcome" element={isAdmin ? <AdminWelcome /> : (
                    <>
                        <Login setAdmin={setAdmin} />
                    </>
                )} />
                <Route path="/adminbooking" element={<AdminBooking />} />
                <Route path="/adminrequest" element={<AdminRequest />} />
            </Routes>
        </BrowserRouter>
    );
}

function Main() {
    return (
        <div>
            <div className="logo-container">
                <img src={logo} alt="Gov.uk" />
            </div>
            <div className="box">
                <p>Welcome to the GP services</p>
                <br />
                <Button link="/login" label="Log in" />
                <Button link="/signup" label="Sign up" />
            </div>
        </div>
    );
}

export default App;