import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav >
        <div id="logo">
            <img src="logo.png" alt="Forest" style={{width: '78px'}}/>
        </div>

        <label for="drop" class="toggle">Menu</label>
        <input type="checkbox" id="drop" />
            <ul class="menu" style={{top: '12px'}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/volunteer">Volunteer</Link></li>
                <li><Link to="/help">Help</Link></li>
                <li><Link to="/our-works">Our Works</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/donation">Donation</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
