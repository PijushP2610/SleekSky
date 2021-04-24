import React, {useState} from 'react';
import logo from './logo.png';
import UpdateTime from './pages/Home';
import { Link } from 'react-router-dom';

import STime from './STime';
console.log(logo);
function Navbar() {
    const [click, setClick] =useState(false);
return(
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <img src={logo}alt="Logo"/>
                <h1></h1>
                
                <div className='menu-icon'>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                
            </div>
        </nav>
    </>
);
}
export default Navbar;