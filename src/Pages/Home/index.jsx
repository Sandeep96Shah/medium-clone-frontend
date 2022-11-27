import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/Home/HeaderComponent";
import BodyComponent from "../../components/Home/BodyComponent";
import Blog from "../../components/Common/Blog";
import { BlogContainer } from "./styles";
import { fetchAllBlogs } from '../../action';
import moment from 'moment';

const Index = (props) => {
  useEffect(() => {
    props.dispatch(fetchAllBlogs());
  },[]);
  const { blogs } = props;
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
            brief={blog.brief}
            image={blog.image}
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

export default connect(mapStateToProps)(Index);
