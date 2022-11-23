import { SIGNIN, SIGNUP, CREATE_BLOG, SAVE_BLOG, ALL_BLOGS } from "./types";
import { APIUrls } from "../helper/apis";
import { getFormBody, getAuthTokenFromLocalStorage } from "../helper/utils";
import {
  NotificationManager,
} from "react-notifications";

export function allBlogs(data) {
  return {
    type: ALL_BLOGS,
    data,
  };
}

export function fetchAllBlogs() {
  return (dispatch) => {
    const url = APIUrls.allBlogs();
    console.log("url", url);
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        const { status } = data || {};
        if (status === "success") {
          dispatch(allBlogs(data));
        }
      })
      .catch((error) => console.log("error", error));
  };
}

export function createUser({ email, name, password, confirmPassword }) {
  return (dispatch) => {
    const url = APIUrls.signup();
    console.log("url", url);
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, name, password, confirmPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        const { status, message } = data || {};
        if (status === "success") {
          NotificationManager.success(
            "Now SignIn to continue!",
            "Successful",
            2000
          );
        } else {
          NotificationManager.error(message, "Failed", 2000);
        }
      })
      .catch((error) => console.log("error", error));
  };
}


export function userDetails(data) {
  return {
    type: SIGNIN,
    data,
  }
}

export function signinUser({ email, password, navigate }) {
  return (dispatch) => {
    const url = APIUrls.signin();
    console.log("url", url);
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        const { status, message } = data || {};
        if (status === "success") {
          const { token } = data || {};
          localStorage.setItem('token', token);
          //dispatch(userDetails(data));
          navigate('/user');
          NotificationManager.success('Welcome to world of knowledge', "Successful", 2000);
        } else {
          NotificationManager.error(message, "Failed", 2000);
        }
      })
      .catch((error) => console.log("error", error));
  };
}

export function getUserDetails() {
  return (dispatch) => {
    const url = APIUrls.userDetails();
    console.log("url", url);
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        const { status, message } = data || {};
        if (status === "success") {
          dispatch(userDetails(data));
        } else {
          NotificationManager.error(message, "Failed", 2000);
        }
      })
      .catch((error) => console.log("error", error));
  };
}
