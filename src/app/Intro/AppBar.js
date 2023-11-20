// File name: AppBar.js

// Description: Responsible for the appbar in the intro section.

import logo from '../../assets/logo-transparent.png';
import './AppBar.css';

const AppBar = () => {
    return (
        <div className='appbar'>
            <ul>
                <li>
                    <img src={logo} alt="ftm_logo" className='logo' />
                </li>

                <div className="right">
                    <li className="text"><a href="">About Us</a></li>

                    <li className="text"><a href="">Portfolio</a></li>

                    <li className="text"><a href="">Teams</a></li>

                    <li className="text"><a href="">Contact</a></li>
                </div>

            </ul>
        </div>
    );
}

export default AppBar;