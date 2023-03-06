import Widget from "./widget";
import widgetData from "../../store/widgetData";
import "./widget.scss";

const WidgetRow = () => {
  return (
    <div className="widget-container">
      {widgetData.map((widget, index) => {
        return <Widget key={index} widget={widget} />;
      })}
    </div>
  );
};

export default WidgetRow;
