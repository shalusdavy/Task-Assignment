import React from "react";
// import Imagesjson from './Images/Logo.png';

function Services() {
  return (
    <div className="services">
      <div className="cargo">
        <h6>What We Do</h6>
        <h1>Safe & Reliable Cargo Solutions</h1>
      </div>

      <div className="total-services">
        <div className="transport-services">
        <i class="fa-solid fa-ship"></i>
          <div className="service-text">
            <h4>Sea Transport Services</h4>
            <p>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
        <div className="transport-services">
        <i class="fa-solid fa-warehouse"></i>
          <div className="service-text">
            <h4>Warehousing Services</h4>
            <p>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
        <div className="transport-services">
        <i class="fa-solid fa-plane-departure"></i>
          <div className="service-text">
            <h4>Air Fright Services</h4>
            <p>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
        <div className="transport-services">
        <i class="fa-solid fa-truck"></i>
          <div className="service-text">
            <h4>Local Shipping Services </h4>
            <p>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
