import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { Redirect } from "react-router-dom";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginstate, setLoginstate] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bg-image-pc",
      "var(--bg-image-blue-pc)"
    );
    document.documentElement.style.setProperty(
      "--bg-image-mobile",
      "var(--bg-image-blue-mobile)"
    );
  }, []);
  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "password") {
      //console.log(value)
      setPassword(value);
    } else if (name === "username") {
      //console.log(value)
      setUsername(value);
    }
  };
  const handleLogin = (isLoginorNot) => {
    let isLogin = isLoginorNot;

    if (isLogin) {
      localStorage.setItem("auth", true);
      // window.location = 'manage';
    } else {
      localStorage.setItem("auth", false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://book.ntuee.org/backend/login.php", {
        account: username,
        password: password,
      })
      .then(function (data) {
        if (data.data.success === 1) {
          alert("Login Success!");

          handleLogin(true);
          setLoginstate(true);
        } else {
          //console.log(data);
          alert("Login Denied!");

          handleLogin(false);
          setLoginstate(false);
        }
      })
      .catch(function (err) {
        console.log(err);

        handleLogin(false);
        setLoginstate(false);
      });
  };
  if (loginstate) {
    return <Redirect to="/manage/Orders" />;
  } else {
    return (
      <div style={{ backgroundColor: "var(--primary-color-5)" }}>
        <div id="Login_container" className="page_container">
          <form
            id="Login_input"
            className="container col-10 col-sm-8 col-md-6 col-lg-5 col-xl-3"
            onSubmit={handleSubmit}
          >
            <p id="Login_text">Manager Login</p>
            <div className="Login_div">
              <div className="form-group">
                <label>Username:</label>
                <input
                  id="Login_username"
                  className="Login_input form-control"
                  type="text"
                  name="username"
                  onChange={handleInputChange}
                ></input>
                <span className="separator"></span>
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  id="Login_password"
                  className="Login_input form-control"
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                ></input>
                <span className="separator"></span>
              </div>
              <div className="d-flex justify-content-center">
                <input
                  type="submit"
                  id="Login_submit"
                  className="col-5 p-0"
                  value="Login"
                  onSubmit={handleSubmit}
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};
export default Login;
