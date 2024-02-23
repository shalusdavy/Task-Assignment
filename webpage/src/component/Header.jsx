import React from 'react';
import NavBar from './NavBar';
// import './Home.css';

const Header = () => {
  return (
    <div className="home-container">
      <header className="home-header">
       <NavBar/>
      
      </header>
      <div className="hero-content">
  <p>Logistics & Supply Chain Solutions</p>
  <h1>Your Gateway <br/>to any Destination in the <br/> World</h1>
  <h6>In augue ligula, feugiat ut nulla consequat. Ut est lacus,<br/> molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, <br/>nisl id dapibus finibus, enim diam interdum nulla, <br/>sed laoreet risus lectus.</h6>
  <button className='section-button'>Explore More</button>
</div>

    </div>
  );
};

export default Header;