import "./sidebar.scss";
import { Link } from "react-router-dom";
import Button from "../../UI/button/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import LoginContext from "../../context/LoginContext";

const Sidebar = () => {
  const ctx = useContext(LoginContext);

  const onClickHandler = () => {
    ctx.action({ type: "logOut" });
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        <Link to="/">
          <span>lamadmin</span>
        </Link>
      </div>
      <div className="content">
        <ul className="list">
          <li>
            <h4>MAIN</h4>
            <ul className="sub-list">
              <li>
                <DashboardIcon /> <span>Dashboard</span>
              </li>
            </ul>
          </li>
          <li>
            <h4>LISTS</h4>
            <ul className="sub-list">
              <Link to="/users">
                <li>
                  <PersonOutlineIcon />
                  <span>Users</span>
                </li>
              </Link>
              <Link to="/products">
                <li>
                  <AddBusinessIcon />
                  <span>Products</span>
                </li>
              </Link>
              <li>
                <CreditCardIcon />
                <span>Orders</span>
              </li>
              <li>
                <LocalShippingIcon />
                <span>Delivery</span>
              </li>
            </ul>
          </li>
          <li>
            <h4>USEFUL</h4>
            <ul className="sub-list">
              <li>
                <InsertChartIcon />
                <span>Stats</span>
              </li>
              <li>
                <NotificationsIcon />
                <span>Notification</span>
              </li>
            </ul>
          </li>
          <li>
            <h4>SERVICE</h4>
            <ul className="sub-list">
              <li>
                <SettingsSystemDaydreamIcon />
                <span>System Health</span>
              </li>
              <li>
                <PsychologyIcon />
                <span>Logs</span>
              </li>
              <li>
                <SettingsApplicationsIcon />
                <span>Settings</span>
              </li>
            </ul>
          </li>
          <li>
            <h4>USER</h4>
            <ul className="sub-list">
              <li>
                <AccountCircleIcon />
                <span>Profile</span>
              </li>
              <li onClick={onClickHandler}>
                <LogoutIcon />
                <span>Logout</span>
              </li>
            </ul>
          </li>
        </ul>
        <div className="color-mode">
          <Button class="btn-clr"></Button>
          <Button class="btn-clr"></Button>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
