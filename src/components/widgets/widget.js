import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Widget = (props) => {
  return (
    <div className="widget">
      <h3>{props.widget.title}</h3>
      <div className="percent">
        <KeyboardArrowUpOutlinedIcon />
        {props.widget.percent}%
      </div>
      <div className="amount">{props.widget.amount}</div>
      <a href="#!">{props.widget.linkText}</a>
      <div className={`${props.widget.iconClass} icon`}>
        {props.widget.icon}
      </div>
    </div>
  );
};

export default Widget;
