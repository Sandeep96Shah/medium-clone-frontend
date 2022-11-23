import { SIGNIN, SIGNUP, CREATE_BLOG, SAVE_BLOG, ALL_BLOGS, USER_DETAILS, BLOG_DETAILS } from "./types";
import { APIUrls } from "../helper/apis";
import { getFormBody, getAuthTokenFromLocalStorage } from "../helper/utils";
import { NotificationManager } from "react-notifications";

export function allBlogs(data) {
  return {
    type: ALL_BLOGS,
    data,
  };
}

export function fetchAllBlogs() {
  return (dispatch) => {
    const url = APIUrls.allBlogs();
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((data) => {
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
    type: USER_DETAILS,
    data,
  };
}

export function signinUser({ email, password, navigate }) {
  return (dispatch) => {
    const url = APIUrls.signin();
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
        const { status, message } = data || {};
        if (status === "success") {
          const { token } = data || {};
          localStorage.setItem("token", token);
          //dispatch(userDetails(data));
          navigate("/user");
          NotificationManager.success(
            "Welcome to world of knowledge",
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

export function getUserDetails() {
  return (dispatch) => {
    const url = APIUrls.userDetails();
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

export function saveBlog(data) {
  return {
    type: SAVE_BLOG,
    data,
  };
}

export function saveBlogRequest({ userId, blogId }) {
  return (dispatch) => {
    const url = APIUrls.saveBlog();
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: getFormBody({ userId, blogId }),
    })
      .then((response) => response.json())
      .then((data) => {
        const { status, message } = data || {};
        if (status === "success") {
          dispatch(saveBlog(data));
          NotificationManager.success(
            "Blog saved!",
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

export function blogDetails(data){
  return {
    type: BLOG_DETAILS,
    data,
  }
}

export function getBlogDetails({  id }) {
  return (dispatch) => {
    const url = APIUrls.blogDetails(id);
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
        const { status, message } = data || {};
        if (status === "success") {
          dispatch(blogDetails(data));
          console.log('data', data)
        } else {
          NotificationManager.error(message, "Failed", 2000);
        }
      })
      .catch((error) => console.log("error", error));
  };
}


