const API_ROOT = 'http://65.2.39.219';

export const APIUrls = {
    allBlogs: () => `${API_ROOT}/`,
    signup: () => `${API_ROOT}/sign-up`,
    signin: () => `${API_ROOT}/sign-in`,
    blogDetails: (id) => `${API_ROOT}/blog-details/${id}`,
    userDetails: () => `${API_ROOT}/user-details`,
    createBlog: () => `${API_ROOT}/create-blog`,
    updateUserDetails: () => `${API_ROOT}/update-user`,
    saveBlog: () => `${API_ROOT}/save-blog`,
    getSignedUrl: () => `${API_ROOT}/api/upload`,
}