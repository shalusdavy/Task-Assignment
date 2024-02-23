import React from "react";
import Header from "./Header";

import MainHeader from "./MainHeader";
import Services from "./Services";
import DeliveryTravel from "./DeliveryTravel";
import ImgFrames from "./ImgFrames";
import Customer from "./Customer";
import Footer from "./Footer";

// import Content from './content';

const Home = () => {
  return (
    <div className="home">
      <MainHeader />
      <Header />
      <Services />
      <DeliveryTravel />
      <ImgFrames />
      <Customer />
      <Footer />
    </div>
  );
};

export default Home;
