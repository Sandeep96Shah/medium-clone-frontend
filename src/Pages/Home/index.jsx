import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/Home/HeaderComponent";
import BodyComponent from "../../components/Home/BodyComponent";
import Blog from "../../components/Common/Blog";
import { BlogContainer } from "./styles";
import { fetchAllBlogs } from '../../action';
import moment from 'moment';

const Index = (props) => {
  const { blogs, fetchAllBlogsFn } = props;
  useEffect(() => {
    fetchAllBlogsFn();
  },[]);
  return (
    <div>
      <Header />
      <BodyComponent />
      <BlogContainer>
        {blogs?.map((blog) => (
          <Blog
            key={blog._id}
            id={blog._id}
            date={moment(blog.createdAt).format('Do MMM YY')}
            title={blog.title}
            category={blog.category}
            estimated={blog.estimated}
            description={blog.description}
            blogImage={blog.blogImage}
            user={blog.user}
          />
        ))}
      </BlogContainer>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { blogsDetails } = state || {};
  const { blogs } = blogsDetails || {};
  return {
    blogs,
  }
}

export default connect(mapStateToProps, {
  fetchAllBlogsFn: fetchAllBlogs,
})(Index);
