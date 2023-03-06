import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import LoginContext from "./context/LoginContext";
import { useEffect, useReducer } from "react";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const logInReducer = (prev, action) => {
  if (action.type == "logIn") {
    return {
      user: action.payload,
    };
  } else if (action.type == "logOut") {
    return {
      user: null,
    };
  } else {
    return {
      ...prev,
    };
  }
};

function App() {
  const [logIn, logInDispatch] = useReducer(logInReducer, initialState);

  const RequireAuth = ({ children }) => {
    return logIn.user ? children : <Navigate to="/login" />;
  };

  useEffect(() => {
    console.log(logIn);
    localStorage.setItem("user", JSON.stringify(logIn.user));
  }, [logIn.user]);

  return (
    <LoginContext.Provider
      value={{
        action: logInDispatch,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* Nested Route */}
            <Route path="/">
              <Route path="login" element={<Login />} />
              <Route
                index
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route path="users">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <List />
                    </RequireAuth>
                  }
                />
                <Route
                  path=":userId"
                  element={
                    <RequireAuth>
                      <Single />
                    </RequireAuth>
                  }
                />
                <Route
                  path="new"
                  element={
                    <RequireAuth>
                      <New />
                    </RequireAuth>
                  }
                />
              </Route>
              <Route path="products">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <List />
                    </RequireAuth>
                  }
                />
                <Route
                  path=":productId"
                  element={
                    <RequireAuth>
                      <Single />
                    </RequireAuth>
                  }
                />
                <Route
                  path="new"
                  element={
                    <RequireAuth>
                      <New />
                    </RequireAuth>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
