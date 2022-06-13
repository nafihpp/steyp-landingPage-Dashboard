import { React, lazy } from "react";
import Helmet from "react-helmet";
import Navbar from "./Includes/Navbar";
import Spotlight from "./Screens/Spotlight";
import Hero from "./Screens/Hero";
import Sat from "./Screens/Sat";
import Engineer from "./Screens/Engineer";
import Join from "./Screens/Join";
import Eligiblity from "./Screens/Eligiblity";
import Selection from "./Screens/Selection";
const Applys = lazy(() => import("./Screens/Applys"));
const Testimonial = lazy(() => import("./Screens/Testimonial"));
const Foot = lazy(() => import("./Includes/Foot"));
function Mainpage() {
  return (
    <>
      <Helmet>
        <title>Steyp | An Edtech company for Students</title>
        <link
          rel="icon"
          type="image/png"
          href={require("../assets/index.png")}
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
