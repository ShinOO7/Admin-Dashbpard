import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import HomeContainer from "../../components/homeContainer/HomeContainer";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <section className="home">
      <Sidebar />
      <Navbar />
      <HomeContainer />
    </section>
  );
};

export default Home;
