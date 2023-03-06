import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import User from "../../components/user/User";
import Table from "../../components/table/Table";
import Graph from "../../components/Charts/Graph";
import avatar from "../../Images/avatar.jpg";

const Single = () => {
  const userData = {
    avatar: avatar,
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    phone: 2151461466,
    address: "Elton St. 234 Garden Yd. New York",
    country: "USA",
  };

  return (
    <section className="single">
      <Sidebar />
      <Navbar />
      <div className="single-container">
        <div className="profile">
          <User data={userData} />
          <Graph />
        </div>
        <div className="table-container">
          <h3>Latest Transactions</h3>
          <Table />
        </div>
      </div>
    </section>
  );
};

export default Single;
