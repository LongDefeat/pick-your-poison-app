import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignupForm({ signup }) {
  //   const navigate = useNavigate();

  const [signupFormData, setSignUpFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  /**
   * Handle form submission
   *
   * calls login function prop and, if successful, should redirect back
   * to homepage
   */

  /** Update form data field */
  function handleChange(e) {
    const { name, value } = e.target;
    setSignUpFormData((data) => ({ ...data, [name]: value }));
  }
  return (
    <>
      <div className="signup-form">
        <form>
          <label placeholder="Enter First Name">First Name:</label>
          <input
            type="text"
            id="name"
            name="firstName"
            value={signupFormData.firstName}
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
}

export default SignupForm;
