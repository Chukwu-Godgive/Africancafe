import React from 'react';
import Logo from '../../images/Logo.png';
import '../Navbar/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <div className='navbar-container'>
            <div className='navbar-content'>
                <div className='logo'>
                    <Link to='/'><img src={Logo} alt='AC Logo' /></Link>
                </div>
                <div className='navbar-list'>
                    
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/Products'>Products</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default Navbar;