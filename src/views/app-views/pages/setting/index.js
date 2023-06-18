import React, { useEffect, useState } from "react";
import { Form, Avatar, Button, Input, Row, Col, message, Upload } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ROW_GUTTER } from "constants/ThemeConstant";
import Flex from "components/shared-components/Flex";
import Loading from "components/shared-components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "redux/actions/User";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const EditProfile = () => {
  const { id } = useParams();
  const history = useHistory();
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();
  const { currentUser, isLoading } = useSelector((store) => store.user);
  useEffect(() => {
    dispatch(fetchUser(id));
  }, [id]);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const onFinish = (values) => {
    const key = "updatable";
    message.success({ content: "Done!", key });
    setTimeout(() => {
      message.destroy();
      history.push(`${APP_PREFIX_PATH}/client-list`);
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onUploadAvatar = (info) => {
    const key = "updatable";
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => setAvatar(imageUrl));
      message.success({ content: "Uploaded!", key, duration: 2 });
      setTimeout(() => {
        message.destroy();
      }, 1000);
    }
  };

  const onRemoveAvatar = () => {
    setAvatar("");
  };
  const avatarEndpoint = "https://www.mocky.io/v2/5cc8019d300000980a055e76";
  if (isLoading) return <Loading />;
  return (
    <>
      <Flex
        alignItems="center"
        mobileFlex={false}
        className="text-center text-md-left"
      >
        <Avatar size={90} src={avatar} icon={<UserOutlined />} />
        <div className="ml-md-3 mt-md-0 mt-3">
          <Upload
            onChange={onUploadAvatar}
            showUploadList={false}
            action={avatarEndpoint}
          >
            <Button type="primary">Change Avatar</Button>
          </Upload>
          <Button className="ml-2" onClick={onRemoveAvatar}>
            Remove
          </Button>
        </div>
      </Flex>
      <div className="mt-4">
        <Form
          name="basicInformation"
          layout="vertical"
          initialValues={{
            avatar: avatar,
            name: currentUser?.name,
            email: currentUser?.email,
            username: currentUser?.username,
            phoneNumber: currentUser?.phone,
            website: currentUser?.website,
            city: currentUser?.address.city,
            postcode: currentUser?.address.zipcode,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Row gutter={ROW_GUTTER}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please enter a valid email!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Phone Number" name="phoneNumber">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Website" name="website">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="City" name="city">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Post code" name="postcode">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Button type="primary" htmlType="submit">
                Save Change
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default EditProfile;
