import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./pieChart.scss";

const PieChart = () => {
  return (
    <div className="pie-chart">
      <div className="title">
        <h3>Total Revenue</h3>
        <MoreVertIcon />
      </div>
      <div className="main-body">
        <div className="circle-chart">
          <div className="circle"></div>
          <span>70%</span>
        </div>
        <span>Total sales made today</span>
        <span>$420</span>
        <p>
          Previous transactions processing. <br /> Last payments may not be
          included.
        </p>
      </div>
      <ul className="pie-table">
        <li>
          <h4>Target</h4>
          <span>
            <KeyboardArrowDownIcon /> $12.4k
          </span>
        </li>
        <li>
          <h4>Last Week</h4>
          <span>
            <KeyboardArrowUpIcon /> $12.4k
          </span>
        </li>
        <li>
          <h4>Last Month</h4>
          <span>
            <KeyboardArrowUpIcon /> $12.4k
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PieChart;
