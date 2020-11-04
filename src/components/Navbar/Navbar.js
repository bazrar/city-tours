import React from 'react'
import './Navbar.scss'
export default function Navbar (props) {
    return(
       <nav className='navbar'>
           <img className='logo' src='https://cdn.logo.com/hotlink-ok/logo-social.png' 
           alt='logo' />
           <ul className="nav-links">
               <li>
                   <a href='/' className='nav-link' >home</a>
                </li>
               <li>
                   <a href='/' className='nav-link' >about</a>
                </li>
               <li>
                   <a href='/' className='nav-link' >tours</a>
                </li>
                  
           </ul>
       </nav>
    )
}