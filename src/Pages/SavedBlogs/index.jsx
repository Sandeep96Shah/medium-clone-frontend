import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Tabs } from "antd";
import { Container } from "./styles";
import Blog from "../../components/Common/Blog";
import { getUserDetails } from "../../action";
import moment from 'moment';

const Index = (props) => {
  const navigate = useNavigate();
  const { blogs = [], getUserDetailsFn } = props || {};
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      getUserDetailsFn();
    }
  }, []);
  return (
    <Container>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Saved Blogs" key="1">
          {blogs.length > 0 ? (blogs.map((blog) => (
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
          ))) : (
            <p  className="no-post">You haven't saved any blog!</p>
          )}
        </Tabs.TabPane>
      </Tabs>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { blogsDetails } = state || {};
  const { savedBlogs } = blogsDetails || {};
  return { blogs: savedBlogs };
};

export default connect(mapStateToProps, {
  getUserDetailsFn: getUserDetails,
})(Index);
