import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
        <nav>
<img src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg" alt="" />
<ul>
 
<Link to="/about"> <li>About</li></Link>
<Link to="/services"> <li>Services</li></Link>
<Link to="/contact"> <li>Contact Us</li></Link>
</ul>

        </nav>
        
    </div>
  )
}

export default Navbar