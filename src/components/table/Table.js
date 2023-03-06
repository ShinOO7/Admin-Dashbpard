import "./table.scss";
import tableData from "../../store/tableData";

const Table = () => {
  return (
    <div className="table">
      <ul className="headings">
        <li className="col-heading">Tracking ID</li>
        <li className="col-heading">Product</li>
        <li className="col-heading">Customer</li>
        <li className="col-heading">Date</li>
        <li className="col-heading">Amount</li>
        <li className="col-heading">Payment Method</li>
        <li className="col-heading">Status</li>
      </ul>
      {tableData.map((data, index) => (
        <ul className="user-data" key={index}>
          <li>{data.trackingId}</li>
          <li>
            <div
              className="product-img"
              style={{ backgroundImage: `url("${data.productImg}")` }}
            ></div>
            {data.product}
          </li>
          <li>{data.customer}</li>
          <li>{`${data.date.getDate()}/${data.date.getMonth()}/${data.date.getFullYear()}`}</li>
          <li>{data.amount}</li>
          <li>{data.paymentMethod}</li>
          <li className={data.status == "Approved" ? "green" : "golden"}>
            {data.status}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Table;
