import React from "react";
import { connect } from "react-redux";
import { Button, Form, Input } from "antd";
import { signinUser } from "../../action";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const { handleOk } = props;
  const navigate = useNavigate();
  const onFinish = (values) => {
    props.dispatch(
        signinUser({
        email: values.email,
        password: values.password,
        navigate
      })
    );
    handleOk();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please enter your email!",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please enter your password!",
          },
        ]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Sign In
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(SignUp);
