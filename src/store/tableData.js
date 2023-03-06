import AcerNitro5 from "../Images/Acer_nitro.jpg";
import PlayStation5 from "../Images/Play_station.jpg";
import RedragonS101 from "../Images/Reddragon_s101.jpg";
import RazerBlade15 from "../Images/Razer_blade.jpg";
import AsusRogStrix from "../Images/Asus_rog_strix.jpg";

const tableData = [
  {
    trackingId: 1143155,
    product: "Acer Nitro 5",
    productImg: AcerNitro5,
    customer: "John Smith",
    date: new Date(2022, 2, 1),
    amount: 785,
    paymentMethod: "Cash On Delivery",
    status: "Approved",
  },
  {
    trackingId: 223535,
    product: "Playstation 5",
    productImg: PlayStation5,
    customer: "Michael Doe",
    date: new Date(2022, 3, 10),
    amount: 900,
    paymentMethod: "Online Payment",
    status: "Pending",
  },
  {
    trackingId: 2342353,
    product: "Redragon S101",
    productImg: RedragonS101,
    customer: "John Smith",
    date: new Date(2022, 5, 21),
    amount: 35,
    paymentMethod: "Cash on delivery",
    status: "Pending",
  },
  {
    trackingId: 2584756,
    product: "Razer Blade 15",
    productImg: RazerBlade15,
    customer: "Jane Smith",
    date: new Date(2022, 7, 16),
    amount: 920,
    paymentMethod: "Online",
    status: "Approved",
  },
  {
    trackingId: 2578964,
    product: "Asus Rog Strix",
    productImg: AsusRogStrix,
    customer: "Harold Carol",
    date: new Date(2022, 10, 1),
    amount: 2000,
    paymentMethod: "Online",
    status: "Pending",
  },
];

export default tableData;
