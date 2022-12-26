import {
  SAVE_BLOG,
  ALL_BLOGS,
  USER_DETAILS,
  BLOG_DETAILS,
  UPDATE_USER_DETAILS,
} from "./types";
import { APIUrls } from "../helper/apis";
import { getFormBody, getAuthTokenFromLocalStorage } from "../helper/utils";
import { NotificationManager } from "react-notifications";
import axios from "axios";

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
      .then(async (response) => {
        const data = await response.json();
        const status = response.status;
        if (status === 200) {
          dispatch(allBlogs(data?.data));
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
      .then(async (response) => {
        const data = await response.json();
        const status = response.status;
        const { message, data: error } = data || {};
        if (status === 200) {
          NotificationManager.success(
            "Now SignIn to continue!",
            "Successful",
            2000
          );
        } else {
          if (status === 404) {
            error.forEach((err, index) => {
              NotificationManager.error(err.msg, "Failed", (index + 2) * 1000);
            });
          } else {
            NotificationManager.error(message, "Failed", 2000);
          }
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
      .then(async (response) => {
        const data = await response.json();
        const status = response.status;
        const { message } = data || {};
        if (status === 200) {
          const { token } = data?.data || {};
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
      .then(async (response) => {
        const data = await response.json();
        const status = response.status;
        const { message } = data || {};
        if (status === 200) {
          dispatch(userDetails(data?.data));
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

export function saveBlogRequest({ blogId }) {
  return (dispatch) => {
    const url = APIUrls.saveBlog();
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: getFormBody({ blogId }),
    })
      .then(async (response) => {
        const data = await response.json();
        const status = response.status;
        const { message } = data || {};
        if (status === 200) {
          dispatch(saveBlog(data?.data));
          NotificationManager.success("Blog saved!", "Successful", 2000);
        } else {
          NotificationManager.error(message, "Failed", 2000);
        }
      })
      .catch((error) => console.log("error", error));
  };
}

export function blogDetails(data) {
  return {
    type: BLOG_DETAILS,
    data,
  };
}

export function getBlogDetails({ id }) {
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
      .then(async (response) => {
        const data = await response.json();
        const status = response.status;
        const { message } = data || {};
        if (status === 200) {
          dispatch(blogDetails(data?.data));
        } else {
          NotificationManager.error(message, "Failed", 2000);
        }
      })
      .catch((error) => console.log("error", error));
  };
}

export function createBlog({ updatedData }) {
  return (dispatch) => {
    const url = APIUrls.createBlog();
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: getFormBody(updatedData),
    })
      .then(async (response) => {
        const data = await response.json();
        const status = response.status;
        const { message } = data || {};
        if (status === 200) {
          // dispatch(blogDetails(data));
          NotificationManager.success("Blog Posted!", "Successful", 2000);
        } else {
          NotificationManager.error(message, "Failed", 2000);
        }
      })
      .catch((error) => console.log("error", error));
  };
}

function updateUser(data) {
  return {
    type: UPDATE_USER_DETAILS,
    data,
  };
}

export function updateUserDetails({ updatedData }) {
  return (dispatch) => {
    const url = APIUrls.updateUserDetails();
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: getFormBody(updatedData),
    })
      .then(async (response) => {
        const data = await response.json();
        const status = response.status;
        const { message } = data || {};
        if (status === 200) {
          dispatch(updateUser(data?.data));
          NotificationManager.success("Profile Updated!", "Successful", 2000);
        } else {
          NotificationManager.error(message, "Failed", 2000);
        }
      })
      .catch((error) => console.log("error", error));
  };
}

export function getSignedUrl({ updatedData, type }) {
  return (dispatch) => {
    const url = APIUrls.getSignedUrl();
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then(async (response) => {
        const data = await response.json();
        const { url, key } = data || {};
        const status = response.status;
        if (status === 200) {
          axios.put(url, updatedData.image, {
            headers: {
              "Content-Type": updatedData.image.type,
            },
          });
          if (type === "blog") {
            updatedData.blogImage = key;
            dispatch(createBlog({ updatedData }));
          } else {
            updatedData.avatar = key;
            dispatch(updateUserDetails({ updatedData }));
          }
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
}
