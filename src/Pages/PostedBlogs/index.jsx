import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Tabs } from "antd";
import { Container } from "./styles";
import Blog from "../../components/Common/Blog";
import { data } from "../../demo-data/index";
import { getUserDetails } from '../../action';

const Index = (props) => {
  const { blogs = [], dispatch } = props || {};
  useEffect(() => {
    dispatch(getUserDetails());
  },[]);
  return (
    <Container>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Posted Blogs" key="1">
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              id={blog._id}
              date={blog.date}
              title={blog.title}
              category={blog.category}
              description={blog.description}
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
