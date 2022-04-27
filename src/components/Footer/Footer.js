import React from 'react';
import Logo from '../../images/Logo.png';
import '../Navbar/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='footer-logo'>
                    <Link to='/'><img src={Logo} alt='AC Logo' /></Link>
                </div>

                <div className='footer-icon'>
               
                <img src="https://img.icons8.com/small/16/000000/twitter.png" alt='twitter' />

                <img src="https://img.icons8.com/material/24/000000/facebook-new.png" alt='facebook' />

                <img src="https://img.icons8.com/small/16/000000/pinterest.png" alt='pintrest'/>

                </div>
                
                <div>
                    <p>Copyright &copy; 2022 AfricanCafe SideHustle 5.0 Group 166</p>
                </div>
            </div>
        </div>
    )
};
export default Navbar;