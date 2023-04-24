import logo from './govuklogo.png';
import Greenbuttonright from './Greenbuttonright.js';
import Greenbuttonleft from './Greenbuttonleft.js';
import Button from './Button.js'
import './stylesheet.css';

function AdminWelcome() {
    return (
        <div>
            <div className="logo-container">
                <img src={logo} alt="Gov.uk" />
            </div>
            <div className="box">
                <p>Welcome</p>
                <br />
                <div className="buttonContainer">
                    <div style={{ marginRight: '10px' }}>
                        <Greenbuttonleft link="/adminbooking" label="Book appointment" />
                    </div>
                    <div>
                        <Greenbuttonright link="/adminrequest" label="Request prescription" />
                    </div>
                </div>
                <br />
                <div>
                    <Button link="/" label="Log out" />
                </div>
            </div>
        </div>
    );
}

export default AdminWelcome;