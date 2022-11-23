import { SIGNIN, SIGNUP, CREATE_BLOG, SAVE_BLOG, ALL_BLOGS, USER_DETAILS } from "../action/types";

const initialState = {
  user: {},
  savedBlogs: [],
  postedBlogs: [],
  following: [],
  blogs: [],
};

// TODO add following features 
export default function blogs(state = initialState, action) {
  const { type, data } = action || {};
  switch (type) {
    case ALL_BLOGS:
        return {
            ...state,
            blogs: data.blogs,
        }
    case USER_DETAILS:
      return {
        ...state,
        user: data.user,
        savedBlogs: data.allSavedBlogs.blogs,
        postedBlogs: data.allPostedBlogs.blogs,
        blogs: data.allBlogs,
      };
    case CREATE_BLOG:
      return {
        ...state,
        postedBlogs: data.postedBlogs,
      };
    case SAVE_BLOG:
      return {
        ...state,
        savedBlogs: data.savedList.blogs,
      };
      default: 
        return state;
  }
}
