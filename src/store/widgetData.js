import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const widgetData = [
  {
    title: "USERS",
    percent: "20",
    amount: "100",
    linkText: "See all users",
    icon: <PersonOutlineOutlinedIcon />,
    iconClass: "red",
  },
  {
    title: "ORDERS",
    percent: "20",
    amount: "100",
    linkText: "View all orders",
    icon: <ShoppingCartOutlinedIcon />,
    iconClass: "yellow",
  },
  {
    title: "EARNINGS",
    percent: "20",
    amount: "100",
    linkText: "View net earnings",
    icon: <MonetizationOnOutlinedIcon />,
    iconClass: "green",
  },
  {
    title: "BALANCE",
    percent: "20",
    amount: "100",
    linkText: "View all orders",
    icon: <AccountBalanceWalletOutlinedIcon />,
    iconClass: "purple",
  },
];

export default widgetData;
