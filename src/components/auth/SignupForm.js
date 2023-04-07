import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SignupForm.module.css";

function SignupForm({ signup }) {
  const [signupFormData, setSignUpFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

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
            <label htmlFor="firstName">First Name:</label>
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
            <label htmlFor="lastName">Last Name:</label>
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
            <label htmlFor="username">Username:</label>
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
            <label htmlFor="password">Password:</label>
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

          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              value={signupFormData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <button
              className={styles.btn}
              type="submit"
              onClick={(e) => signup(e, signupFormData)}
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
