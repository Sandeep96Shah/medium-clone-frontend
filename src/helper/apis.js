const API_ROOT = 'http://localhost:8000';

export const APIUrls = {
    allBlogs: () => `${API_ROOT}/`,
    signup: () => `${API_ROOT}/sign-up`,
    signin: () => `${API_ROOT}/sign-in`,
    userDetails: () => `${API_ROOT}/user-details`,
    createBlog: () => `${API_ROOT}/create-blog`,
    saveBlog: () => `${API_ROOT}/save-blog`,
}