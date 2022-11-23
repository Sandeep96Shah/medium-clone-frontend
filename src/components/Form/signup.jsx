import React from "react";
import { connect } from "react-redux";
import { Button, Form, Input } from "antd";
import { createUser } from "../../action";

const SignUp = (props) => {
  const { handleOk } = props;
  const onFinish = (values) => {
    props.dispatch(
      createUser({
        name: values.name,
        email: values.name,
        password: values.password,
        confirmPassword: values.confirmPassword,
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
        name="name"
        rules={[
          {
            required: true,
            message: "Please enter your name",
          },
        ]}
      >
        <Input placeholder="Name" />
      </Form.Item>

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

      <Form.Item
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: "Please enter your confirmPassword!",
          },
        ]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Sign Up
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(SignUp);
