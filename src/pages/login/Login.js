import "./login.scss";
import { useEffect, useReducer, useContext } from "react";
import Button from "../../UI/button/Button";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../context/LoginContext";

const defaultState = {
  email: "",
  emailClicked: false,
  password: "",
  passwordClicked: false,
  text: "",
};

const formReducer = (state, action) => {
  if (action.type == "setEmail") {
    return {
      ...state,
      email: action.value,
    };
  } else if (action.type == "setPassword") {
    return {
      ...state,
      password: action.value,
    };
  } else if (action.type == "emailClicked") {
    return {
      ...state,
      emailClicked: true,
    };
  } else if (action.type == "passwordClicked") {
    return {
      ...state,
      passwordClicked: true,
    };
  } else if (action.type == "setText") {
    return {
      ...state,
      text: action.value,
    };
  } else {
    return { ...state };
  }
};

const Login = () => {
  const ctx = useContext(LoginContext);

  const navigate = useNavigate();

  const [form, formDispatch] = useReducer(formReducer, defaultState);

  const loginHandler = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        //signed in
        const user = userCredential.user;
        ctx.action({ type: "logIn", payload: user });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, "....", errorMessage);
        formDispatch({ type: "setText", value: errorCode });
      });
  };

  const emailHandler = (event) => {
    formDispatch({ type: "setEmail", value: event.target.value });
  };

  const passwordHandler = (event) => {
    formDispatch({ type: "setPassword", value: event.target.value });
  };

  const emailBlurHandler = () => {
    formDispatch({ type: "emailClicked", value: true });
  };

  const passwordBlurHandler = () => {
    formDispatch({ type: "passwordClicked", value: true });
  };

  useEffect(() => {
    const timeout = setTimeout(inputValidation, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [form.email, form.password, form.emailClicked, form.passwordClicked]);

  const inputValidation = () => {
    if (
      form.emailClicked &&
      (form.email.length == 0 || !form.email.includes("@"))
    ) {
      formDispatch({ type: "setText", value: "Enter a valid email" });
    } else if (form.passwordClicked && form.password.length < 4) {
      formDispatch({
        type: "setText",
        value: "Password should atleast container 4 characters",
      });
    } else {
      formDispatch({
        type: "setText",
        value: "",
      });
    }
  };

  return (
    <div className="login">
      <form onSubmit={loginHandler}>
        <input
          onBlur={emailBlurHandler}
          type="email"
          onChange={emailHandler}
          placeholder="email"
        />
        <input
          onBlur={passwordBlurHandler}
          onChange={passwordHandler}
          type="password"
          placeholder="password"
        />
        <Button type="submit">Login</Button>
        <span>{form.text}</span>
      </form>
    </div>
  );
};

export default Login;
