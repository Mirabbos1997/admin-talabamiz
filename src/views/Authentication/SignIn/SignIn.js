import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Input, Button, Select } from "antd";
// import Fade from 'react-reveal/Fade';
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";

import "../../../../assets/scss/style.scss";
import classes from "./SignIn.module.css";
import Breadcrumb from "../../../layout/AdminLayout/Breadcrumb";
import SigninService from "../../../../services/Signin/signin";

// import DEMO from "../../../../store/constant";
// import logo from "../../../../assets/images/uzasbo.png";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const SignIn = (props) => {
  const [isSignedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const { Option } = Select;
  let initialLang = localStorage.i18nextLng;

  const onFinish = (values) => {
    setLoading(true);
    SigninService.signin(values)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
          "userInfo",
          JSON.stringify(response.data.userinfo)
        );
        setSignedIn(true);
      })
      .catch((err) => {
        console.log(err.data);
        // window.alert(err);
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const langChange = (lang) => {
    i18next.changeLanguage(lang).catch((err) => {
      console.log(err);
      alert(err);
      return err;
    });
  };

  return (
    <>
      {isSignedIn && <Redirect to="/" exact />}
      <Breadcrumb />
      <Fade>
        <div className="auth-wrapper">
          <div className={classes.SignInLang}>
            <Select
              suffixIcon={<i className="icon feather icon-globe" />}
              defaultValue={initialLang}
              style={{ width: 120 }}
              onChange={langChange}
              getPopupContainer={(trigger) => trigger.parentNode}
            >
              <Option value="uzLat">O'zbek</Option>
              <Option value="uzCyrl">Ўзбек</Option>
              <Option value="ru">Русский</Option>
              <Option value="en">English</Option>
            </Select>
          </div>
          <div className="auth-content">
            <div className="auth-bg">
              <span className="r" />
              <span className="r s" />
              <span className="r s" />
              <span className="r" />
            </div>
            <div className="card">
              <div className="card-body">
                <div className="text-center">
                  <div className="mb-4">
                    <i className="feather icon-unlock auth-icon" />
                  </div>
                  <h3 className="mb-4">{t("login")}</h3>
                  {/* <div className={classes.SignInLogo}>
                <a href={DEMO.BLANK_LINK} >
                  <img
                    src={logo}
                    alt="UzASBO"
                    style={{ transition: "opacity .5s ease-in-out" }}
                  />
                </a>
                </div> */}
                </div>
                <Form
                  {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label={t("username")}
                    name="username"
                    rules={[
                      { required: true, message: t("usernameVerification") },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label={t("password")}
                    name="password"
                    rules={[
                      { required: true, message: t("passwordVerification") },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item className={classes.Button}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                      {t("Submit")}
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default SignIn;
