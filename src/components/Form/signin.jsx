import React from "react";
import { connect } from "react-redux";
import { Button, Form, Input } from "antd";
import { signinUser } from "../../action";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

const SignUp = (props) => {
  const { handleOk, showSignUpModal, signinUserFn } = props;
  const navigate = useNavigate();
  const onFinish = (values) => {
      signinUserFn({
        email: values.email,
        password: values.password,
        navigate,
      })
    handleOk();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSignUpmodal = () => {
    showSignUpModal();
    handleOk();
  };
  return (
    <Container>
      <Form
        name="basic"
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

        <div className="signin-signup-button">
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
          <Button type="secondary" onClick={handleSignUpmodal}>
            Sign Up
          </Button>
        </div>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  signinUserFn: signinUser,
})(SignUp);
