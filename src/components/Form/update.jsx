import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, Input, Upload } from "antd";
import { updateUserDetails } from "../../action";

const Update = (props) => {
  const { handleOk, name, avatar, dispatch, user } = props;
  const [fileList, setFileList] = useState();
  const onFinish = (values) => {
    const formData = new FormData();
    formData.append("avatar", fileList[0]);
    formData.append("user", user._id);
    dispatch(updateUserDetails({ formData }));
    handleOk();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const info = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([file]);
      return false;
    },
    fileList,
  };
  return (
    <Form
      name="Update"
      initialValues={{
        name,
        avatar,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item name="name">
        <Input placeholder="Name" />
      </Form.Item>

      <Upload {...info}>
        <Button>Select File</Button>
      </Upload>

      <Button type="primary" htmlType="submit">
        Update
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => {
  const { blogsDetails } = state || {};
  const { user } = blogsDetails || {};
  return { user };
};

export default connect(mapStateToProps)(Update);
