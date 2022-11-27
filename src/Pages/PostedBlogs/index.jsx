import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Tabs } from "antd";
import { Container } from "./styles";
import Blog from "../../components/Common/Blog";
import { getUserDetails } from '../../action';
import moment from 'moment';

const Index = (props) => {
  const navigate = useNavigate();
  const { blogs = [], dispatch } = props || {};
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
    dispatch(getUserDetails());
    }
  },[]);
  return (
    <Container>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Posted Blogs" key="1">
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
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
        </Tabs.TabPane>
      </Tabs>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { blogsDetails } = state || {};
  const { postedBlogs } = blogsDetails || {};
  return {
    blogs: postedBlogs,
  };
};

export default connect(mapStateToProps)(Index);
