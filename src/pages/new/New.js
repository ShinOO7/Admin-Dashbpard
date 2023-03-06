import Form from "../../components/form/Form";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { user, product } from "../../store/formData";

const New = () => {
  const location = useLocation().pathname;
  return (
    <section>
      <Sidebar />
      <Navbar />
      {location == "/users/new" ? (
        <Form data={user}></Form>
      ) : (
        <Form data={product}></Form>
      )}
    </section>
  );
};

export default New;
