import React from 'react';
import user1 from "./Images/user1.png";
import user2 from "./Images/user2.png";

const Customer = () => {
  return (
    <div className="customer">
      <div className="testimonial">
        <div className='arrow-change'>
        <h6>Testimonial</h6>
        <h2>What Our Customers Say</h2>
        </div>
        <div className='arro-icons'>
        <i class="fa-solid fa-arrow-left"></i>
        <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className='custom-main'>
        <div className="customer-info1">
          <div className="customer-profile">
            <img src={user1} alt="User 1" />
          </div>
          <p style={{ maxWidth: "50rem" }}>
            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
          </p>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div className="customer-info">
          <div className="customer-profile">
            <img src={user2} alt="User 2" />
          </div>
          <p>
            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
          </p>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
