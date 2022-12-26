import React from "react";
import { connect } from "react-redux";
import { Button, Form, Input } from "antd";
import { createUser } from "../../action";
import { Container } from "./styles";

const SignUp = (props) => {
  const { handleOk, showSignInModal, createUserFn } = props;
  const onFinish = (values) => {
      createUserFn({
        name: values.name,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      })
    handleOk();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSignInModal = () => {
    showSignInModal();
    handleOk();
  };
  return (
    <Container>
      <Form
        name="signup"
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

        <div className="signin-signup-button">
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
          <Button type="secondary" onClick={handleSignInModal}>Sign In</Button>
        </div>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  createUserFn: createUser,
})(SignUp);
