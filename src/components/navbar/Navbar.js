import "./navbar.scss";
import Input from "../../UI/input/Input";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="search-bar">
        <Input
          icon={<SearchIcon></SearchIcon>}
          type="text"
          placeholder={"Search..."}
        ></Input>
      </div>
      <ul className="nav-links">
        <li>
          <LanguageIcon />
          <span>English</span>
        </li>
        <li>
          <DarkModeOutlinedIcon />
        </li>
        <li>
          <FullscreenExitOutlinedIcon />
        </li>
        <li>
          <NotificationsNoneOutlinedIcon />
        </li>
        <li>
          <ChatBubbleOutlineOutlinedIcon />
        </li>
        <li>
          <ListOutlinedIcon />
        </li>
        <li>
          <div className="profile"></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
