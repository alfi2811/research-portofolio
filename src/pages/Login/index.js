import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
// import { InfoCircleOutlined } from '@ant-design/icons';
import LayoutLogRes from '../../components/LayoutLogRes'
import imgPerson from '../../assets/images/person.png'
import emoji from '../../assets/images/Emoji.png'
import './Login.scss'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { post_login } from '../../redux/actions/main';

const Login = () => {
    let history = useHistory()
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    // const requiredMark = 'optional';
    const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

    useEffect(() => {
        forceUpdate({});
    }, []);
    const onFinish = (values) => {
        dispatch(post_login(values, history))
    };
    return (
        <LayoutLogRes person={imgPerson}>
            <div className="login-container">
                <div className="title">
                    <h1>Welcome Back</h1>
                    <img src={emoji} alt="" />
                </div>
                <p className="desc">Discover best research that match your field</p>                
                {/* <Form
                    form={form}
                    layout="vertical"
                    initialValues={{
                        requiredMarkValue: requiredMark,
                    }}                    
                    requiredMark={requiredMark}
                    onFinish={onFinish}
                    >                     */}
                <Form
                  form={form}
                  layout="vertical"                    
                  onFinish={onFinish}
                  >                    
                  <Form.Item 
                    label="Email" 
                    name="email"
                    required={false}
                    rules={[
                      {
                          required: true,
                          message: 'Please input your Email!',
                      },
                    ]}
                  >
                      <Input />
                  </Form.Item>                    
                  <Form.Item 
                    label="Password" 
                    name="password" 
                    required={false}                      
                    rules={[
                      {
                          required: true,
                          message: 'Please input your password!',
                      },
                    ]}                      
                  >
                    <Input.Password />
                  </Form.Item>
                  {/* <Form.Item>
                      <Button type="primary" htmlType="submit" shape="round" size="large" block>
                          Login
                      </Button>
                  </Form.Item> */}
                  <Form.Item shouldUpdate>
                      {() => (
                      <Button
                          shape="round" 
                          size="large" 
                          type="primary"
                          htmlType="submit"
                          // disabled={
                          // !form.isFieldsTouched(true) ||
                          // !!form.getFieldsError().filter(({ errors }) => errors.length).length
                          // }
                          block
                      >
                          Log in
                      </Button>
                      )}
                  </Form.Item>
                </Form>
                <p className="regis-link">Dont have an account? <Link to="/register">Register</Link> </p>
            </div>
        </LayoutLogRes>
    )
}

export default Login
