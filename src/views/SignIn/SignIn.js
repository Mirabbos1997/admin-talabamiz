import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
// import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';
// import CommonServices from '../../../../services/common/common.services';

import './../../../assets/scss/style.scss';
import classes from './SignIn.module.css';
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import SigninService from '../../../../services/Signin/signin';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const SignIn = () => {
  const [isSignedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  // const { Option } = Select;
  // let initialLang = localStorage.i18nextLng;
  const { t } = useTranslation();

  // const onFinish = (values) => {
  //   setLoading(true)
  //   SigninService.signin(values)
  //     .then((response) => {
  //       localStorage.setItem("token", response.data.token)
  //       setSignedIn(true)
  //       setLoading(false)
  //       // if (localStorage.getItem('token')) {

  //       // }
  //       // localStorage.setItem("userInfo", JSON.stringify(response.data.userinfo));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       window.alert(err)
  //     })     
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };

  // const langChange = (lang) => {
  //   i18next.changeLanguage(lang)
  //     .catch(err => {
  //       console.log(err);
  //       alert(err)
  //       return (err);
  //     })
  // }
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    // <>
    //   {isSignedIn && <Redirect to="/" exact />}
    //   <Breadcrumb />
    //   <div className="auth-wrapper">
    //     <div className="auth-content">
    //       <div className="auth-bg">
    //         <span className="r" />
    //         <span className="r s" />
    //         <span className="r s" />
    //         <span className="r" />
    //       </div>
    //       <div className="card">
    //         <div className="card-body">
    //           <div className='text-center'>
    //             <div className="mb-4">
    //               <i className="feather icon-unlock auth-icon" />
    //             </div>
    //             {/* <h3 className="mb-4">{t('login')}</h3> */}
    //           </div>
    //           <Form
    //             {...layout}
    //             name="basic"
    //             initialValues={{ remember: true }}
    //             onFinish={onFinish}
    //             onFinishFailed={onFinishFailed}
    //           >
    //             <Form.Item
    //               label={t('username')}
    //               name="username"
    //               rules={[{ required: true, message: 'Please input your username!' }]}
    //             >
    //               <Input />
    //             </Form.Item>

    //             <Form.Item
    //               label={t('password')}
    //               name="password"
    //               rules={[{ required: true, message: 'Please input your password!' }]}
    //             >
    //               <Input.Password />
    //             </Form.Item>

    //             <Form.Item className={classes.Button}>
    //               <Button
    //                 type="primary"
    //                 htmlType={t('submit')}
    //                 loading={loading}
    //               >

    //               </Button>
    //             </Form.Item>
    //           </Form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // </>
  );
}

export default SignIn;