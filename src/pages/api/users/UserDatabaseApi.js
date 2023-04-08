import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class UserDatabaseApi {
  // token for interactions with the User Database
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("User API Call: ", endpoint, data, method);
    const url = `${BASE_URL}${endpoint}`;
    const headers = {};
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.log(data);
      console.error("API Error: ", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // INDIVIDUAL API ROUTES

  // ===================USER ROUTES======================

  /** Get current user. */

  static async getCurrentUser(username) {
    let res = await this.request(`/users/${username}`);
    console.log("getCurrentUser ", res.user);
    return res.user;
  }

  /** Update profile username/password */
  static async profile(username, data) {
    let res = await this.request(`/users/${username}`, data, "patch");
    return res.updateProfile;
  }

  /** Signup for site. */
  static async signup(data) {
    let res = await this.request(`/auth/register`, data, "post");
    return res.token;
  }

  /** Get token for login from username, password */
  static async login(data) {
    let res = await this.request(`/auth/token`, data, "post");
    return res.token;
  }
}

export default UserDatabaseApi;
