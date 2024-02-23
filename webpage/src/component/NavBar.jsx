import React from 'react';
import './Navbar.css'; 
import Imagesjson from './images.json';

const NavBar = () => {
  const images = Imagesjson;
  console.log(images);

  return (
    <nav className="navbar">
      
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    <div className='nav-qaurts'>
      <ul className="social-icons" style={{
        "fontSize":"20px",
        "color":"#fff",
        "display":'flex',
        "gap":"15px",

      }}>

      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-linkedin"></i>
    
      </ul>
      <button className='quaorts' style={{"fontSize":"16px",
    "fontWeight":"600"}}> Request Quote</button>
      </div>
    

      
    </nav>
  );
};

export default NavBar;
