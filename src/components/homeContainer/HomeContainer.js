import "./homeContainer.scss";
import WidgetRow from "../widgets/WidgetRow";
import PieChart from "../Charts/PieChart";
import Graph from "../Charts/Graph";
import Table from "../table/Table";

const HomeContainer = () => {
  return (
    <article className="home-container">
      <WidgetRow />
      <div className="chart-container">
        <PieChart />
        <Graph />
      </div>
      <div className="table-container">
        <h3>Latest Transactions</h3>
        <Table />
      </div>
    </article>
  );
};

export default HomeContainer;
