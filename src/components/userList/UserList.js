import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../UI/button/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./userList.scss";
import { db } from "../../firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { deleteUser } from "firebase/auth";
import { auth } from "../../firebase";

const UserList = () => {
  const location = useLocation().pathname;
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        setUserData(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(auth.currentUser);
  const deleteHandler = async (event) => {
    await deleteDoc(doc(db, "users", event.target.id));
    setUserData((prev) => {
      prev.filter((data) => event.target.id != data.id);
    });
  };

  console.log(userData);

  const [btnDisabled, setBtnDisabled] = useState({
    firstBtn: true,
    secondBtn: false,
  });
  const modifiedData = [];

  const [initialIndex, setInitialIndex] = useState(0);

  const listShowHandler = () => {
    for (let i = initialIndex; i < initialIndex + 9; i++) {
      if (userData[i]) {
        modifiedData.push(userData[i]);
      }
    }
  };

  listShowHandler();

  const changeIndexHandler = (operation) => {
    if (operation == "increase") {
      if (initialIndex + 9 < userData.length) {
        setInitialIndex((prev) => prev + 9);
        setBtnDisabled({ firstBtn: false, secondBtn: true });
      }
    } else {
      if (initialIndex != 0) {
        setInitialIndex((prev) => prev - 9);
        setBtnDisabled({ firstBtn: true, secondBtn: false });
      }
    }
  };

  return (
    <div className="user-list">
      <div className="list">
        <ul className="list-heading">
          <li>ID</li>
          <li>User</li>
          <li>Email</li>
          <li>Phone</li>
          <li>Country</li>
          <li>Action</li>
        </ul>
        {modifiedData.map((user) => (
          <ul className="user" key={user.id + user.name}>
            <li>{user.id}</li>
            <li>
              <div
                className="avatar"
                style={{ backgroundImage: `url(${user.img})` }}
              ></div>
              <span>{user.name}</span>
            </li>
            <li>{user.email}</li>
            <li>{user.phone}</li>
            <li>{user.country}</li>
            <div className="btns">
              <Link to="/users/user">
                <Button class="view">View</Button>
              </Link>
              <Button
                id={user.id}
                onClickHandler={deleteHandler}
                class="Delete"
              >
                Delete
              </Button>
            </div>
          </ul>
        ))}
      </div>
      <div className="btns">
        <span>
          {(() => {
            let text;
            if (initialIndex + 9 < userData.length) {
              if (modifiedData.length > 0) {
                text = `${modifiedData.length + 1}-${initialIndex + 9} of ${
                  userData.length
                }`;
              }
            } else {
              text = `${initialIndex + 1} - ${userData.length} of ${
                userData.length
              }`;
            }
            return text;
          })()}
        </span>
        <Button
          disable={btnDisabled.firstBtn}
          onClickHandler={() => {
            changeIndexHandler("decrease");
          }}
        >
          <ArrowBackIosNewIcon />
        </Button>
        <Button
          disable={btnDisabled.secondBtn}
          onClickHandler={() => {
            changeIndexHandler("increase");
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </div>
    </div>
  );
};

export default UserList;
