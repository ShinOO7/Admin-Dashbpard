import Button from "../../UI/button/Button";
import "./user.scss";

const User = ({ data }) => {
  return (
    <div className="user-container">
      <Button>Edit</Button>
      <h3>Information</h3>
      <div className="info">
        <div
          className="profile-pic"
          style={{ backgroundImage: `url("${data.avatar}")` }}
        ></div>
        <div className="text">
          <h3>{data.name}</h3>
          <p>
            <span>Email:</span>
            {data.email}
          </p>
          <p>
            <span>Phone:</span>
            {data.phone}
          </p>
          <p>
            <span>Address:</span>
            {data.address}
          </p>
          <p>
            <span>Country:</span>
            {data.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
