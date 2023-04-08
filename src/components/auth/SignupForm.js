import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SignupForm.module.css";
import UserDatabaseApi from "../../pages/api/users/UserDatabaseApi";

function SignupForm({}) {
  // const navigate = useNavigate();

  const [signupFormData, setSignUpFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  async function signupRequest(signupFormData) {
    try {
      let token = await UserDatabaseApi.signup(signupFormData);
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
    let res = await signupRequest(signupFormData);
    if (res.success) {
      console.log("good job it worked");
      // navigate("/");
    } else {
      console.log(res.errors);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSignUpFormData((data) => ({ ...data, [name]: value }));
  }

  return (
    <>
      <h3 className={styles.signupIntro}>Sign up with us today!</h3>
      <div className={styles.signupForm}>
        <form>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="firstName">
              First Name:
            </label>
            <input
              className="input"
              type="text"
              id="firstName"
              name="firstName"
              value={signupFormData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="lastName" className={styles.label}>
              Last Name:
            </label>
            <input
              className="input"
              type="text"
              id="lastName"
              name="lastName"
              value={signupFormData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>
              Username:
            </label>
            <input
              className="input"
              type="text"
              id="username"
              name="username"
              value={signupFormData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              value={signupFormData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Your Email:
            </label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              value={signupFormData.email}
              onChange={handleChange}
              required
            />
          </div> */}

          <div className={styles.formGroup}>
            <button
              className={styles.btn}
              type="submit"
              onClick={(e) => handleSubmit(e, signupFormData)}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupForm;
