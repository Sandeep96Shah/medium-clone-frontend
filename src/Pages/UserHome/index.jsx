import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "./styles";
import Blog from "../../components/Common/Blog";
import { getUserDetails } from "../../action";
import moment from 'moment';

const Index = (props) => {
  const navigate = useNavigate();

  const blogs = useSelector((state) => ( state.blogsDetails.blogs ));

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      dispatch(getUserDetails());
    }
  }, []);
  return (
    <Container>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="For You" key="1">
          {blogs.map((blog) => (
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
        </Tabs.TabPane>
        {/* <Tabs.TabPane tab="Following" key="2">
            {data.map((blog) => (
              <Blog
                id={blog.id}
                key={blog.id}
                name={blog.name}
                date={blog.date}
                title={blog.title}
                category={blog.category}
                description={blog.description}
                estimated={blog.estimated}
                brief={blog.brief}
              />
            ))}
          </Tabs.TabPane> */}
      </Tabs>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { blogsDetails } = state || {};
  const { blogs } = blogsDetails || {};
  return { blogs };
};
export default Index;
