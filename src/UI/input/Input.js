import "./input.scss";

const Input = (props) => {
  return (
    <div className="input">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        onClick={props.onClick}
        placeholder={props.placeholder}
        type={props.type}
        id={props.id}
        value={props.value}
      />
      {props.icon}
    </div>
  );
};

export default Input;
