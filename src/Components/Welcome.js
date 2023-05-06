import logo from './govuklogo.png';
import Greenbuttonright from './Greenbuttonright.js';
import Greenbuttonleft from './Greenbuttonleft.js';
import Button from './Button.js'
import './stylesheet.css';

function Welcome() {
    return (
        <div>
            <div className="logo-container">
                <img src={logo} alt="Gov.uk" />
            </div>
            <div className="box">
                <p>Welcome</p>
                <div className="buttonContainer">
                    <div style={{ marginRight: '10px' }}>
                        <Greenbuttonleft link="/booking" label="Book appointment" />
                        <br />
                        <Greenbuttonleft link="/doctors" label="View Doctors" />
                    </div>
                    <div>
                        <Greenbuttonright link="/records" label="Medical records" />
                        <br />
                        <Greenbuttonright link="/request" label="Request prescription" />
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

export default Welcome;