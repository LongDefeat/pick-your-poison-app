import React, { useState, useContext } from "react";
import UserDatabaseApi from "../../pages/api/users/UserDatabaseApi";
import Image from "next/image";
// import cocktailImg from ".././public/cocktail.jpg";
import CurrentUserContext from "./CurrentUserContext";
import styles from "../../styles/LoginForm.module.css";

function LoginForm() {
  const { setToken } = useContext(CurrentUserContext);

  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  async function loginRequest(signupFormData) {
    try {
      let token = await UserDatabaseApi.login(loginFormData);
      setToken(token);
      console.log("success!!!");
      return { success: true };
    } catch (errors) {
      console.log("signup failed", errors);
      return { success: false, errors };
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await loginRequest(loginFormData);
    if (res.success) {
      console.log("good job it worked");
      // navigate("/");
    } else {
      console.log(res.errors);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((data) => ({ ...data, [name]: value }));
  }

  return (
    <>
      <h3 className={styles.loginIntro}>Log in!</h3>
      <div className={styles.loginForm}>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>
              Username:
            </label>
            <input
              className={styles.input}
              type="text"
              id="username"
              name="username"
              value={loginFormData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              className={styles.input}
              type="password"
              id="password"
              name="password"
              value={loginFormData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <button className={styles.btn} type="submit" onClick={handleSubmit}>
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
