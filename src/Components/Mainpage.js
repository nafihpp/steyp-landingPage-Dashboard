import React from "react";
import Navbar from "./Includes/Navbar";
import Spotlight from "./Screens/Spotlight";
import Hero from "./Screens/Hero";
import Sat from "./Screens/Sat";
import Engineer from "./Screens/Engineer";
import Join from "./Screens/Join";
import Eligiblity from "./Screens/Eligiblity";
import Selection from "./Screens/Selection";
import Applys from "./Screens/Applys";
import Helmet from "react-helmet";
import Testimonial from "./Screens/Testimonial";
import Foot from "./Includes/Foot";
import Favicon from "../assets/index.png"
function Mainpage() {
  return (
    <>
      <Helmet>
        <title>Steyp | An Edtech company for Students</title>
        <link
          rel="icon"
          type="image/png"
          href={Favicon}
          sizes="16x16"
        />
      </Helmet>
      <Navbar />
      <Spotlight />
      <Hero />
      <Sat />
      <Engineer />
      <Join />
      <Eligiblity />
      <Selection />
      <Applys />
      <Testimonial />
      <Foot />
    </>
  );
}
export default Mainpage;
