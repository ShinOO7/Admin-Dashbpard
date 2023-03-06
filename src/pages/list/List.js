import "./list.scss";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import UserList from "../../components/userList/UserList";
import Button from "../../UI/button/Button";

const List = () => {
  const location = useLocation().pathname;
  return (
    <section className="users">
      <Sidebar />
      <Navbar />
      <div className="list-container">
        <div className="new">
          <h3>Add New User</h3>
          <Link to={location == "/users" ? "/users/new" : "/products/new"}>
            <Button>Add New</Button>
          </Link>
        </div>
        <UserList />
      </div>
    </section>
  );
};

export default List;
