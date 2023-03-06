const Button = (props) => {
  return (
    <button
      id={props.id}
      className={props.class}
      type={props.type}
      onClick={props.onClickHandler}
      disabled={props.disable ? "disabled" : null}
    >
      {props.children}
    </button>
  );
};

export default Button;
