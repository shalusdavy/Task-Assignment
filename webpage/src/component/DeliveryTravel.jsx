import React from "react";
// import Imagesjson from "./Images/writing.png";
import Delivery from "./Images/cobine-img.png";
import backgroundimg from "./Images/flight.png";
import icon1 from "./Images/Icon (2).png";
import icon2 from "./Images/Icon (3).png";


const DeliveryTravel = () => {
  return (
    <>
    <div className="container">
      <div className="background-image" style={{"background":" linear-gradient(360deg, #091242 -11.11%, rgba(9, 18, 66, 0) 90.28%"
}}>
      <img  style={{"background":" linear-gradient(360deg, #091242 -11.11%, rgba(9, 18, 66, 0) 90.28%"} }src={backgroundimg} alt="Instagram" />
      </div>
</div>
<div className="container">
      <div className="content-overlay">
        <div className="banner">
            </div>
          <div className="right-component">
            <div className="right-txt">
            <h6>Why Us</h6>
            <h2>We provide full range global logistics solution</h2>
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
           
            <div className="right-icons">
              <div>
                <div className="icon-text">
                <img src={icon1} alt="Instagram" />
                 
                  <h4>Delivery on Time</h4>
                </div>
                <div className="icon-text">
                <img src={icon2} alt="Instagram" />
                
                  <h4>Delivery on Time</h4>
                </div>
              </div>
              </div>
              </div>
              <div className="right-img">
               
                    <img src={Delivery} alt="Instagram" />
                
              </div>
           
          </div>
          <div className="left-component">
          
          </div>
        </div>

        <div className="count">
            <div className="firstcount">
            <h4>1294</h4>
                <i class="fa-solid fa-square"></i>
                <h6>Delivered Packages</h6>
            </div>
            <div className="firstcount">
                <h4>1294</h4>
                <i class="fa-solid fa-square"></i>
                <h6>Delivered Packages</h6>
            </div>

        </div>
      </div>
      </>
  );
};

export default DeliveryTravel;
