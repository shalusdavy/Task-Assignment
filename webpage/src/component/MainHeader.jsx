import React from "react";
import Imagesjson from './Images/Logo.png';



function MainHeader() {
  return (
    <div className="mainheader">
      <div className="logo">
      <li><a href="#"><img src={Imagesjson} alt="Instagram" /></a></li>
        <h3></h3>
      </div>
      <div className="descriptions">
        <div className="clock">
          <i class="fa-regular fa-clock"></i>
          <div className="condent-text">
            <h6> Mon - Sat 9.00 - 18.00 Sunday Closed</h6>
          </div>
        </div>
        <div className="clock">
          <i class="fa-regular fa-envelope"></i>
          <div className="condent-text"></div>
          <h6> Email contact@logistics.com</h6>
        </div>
        <div className="clock">
          <i class="fa-solid fa-phone"></i>
          <div className="condent-text"></div>
          <h6> Call Us (00) 112 365 489</h6>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
