import React from "react";
import Sidebar from "./Includes/Sidebar";
import Helmet from "react-helmet";
import Favicon from "../assets/index.png";
import Header from "./Includes/Header";
import Middle from "./Screens/Middle";
function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Steyp | Dashboard</title>
        <link rel="icon" type="image/png" href={Favicon} sizes="16x16" />
      </Helmet>
      <Header />
      <Middle />
      <Sidebar />
    </>
  );
}
export default Dashboard;
