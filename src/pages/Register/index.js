import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Modal, Checkbox } from 'antd';
import LayoutLogRes from '../../components/LayoutLogRes'
import emoji_metal from '../../assets/images/Emoji_metal.png'
import imgPerson from '../../assets/images/person_regis.png'
import './Register.scss'
import { Link, useHistory } from 'react-router-dom';
import { post_register, toggle_popup, check_login } from '../../redux/actions/main';
import { useDispatch } from 'react-redux';

const Register = () => {
  let history = useHistory()
  const dispatch = useDispatch()
  const [form] = Form.useForm();   
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  useEffect(() => {
    dispatch(check_login(history, true))
  }, [dispatch, history])

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {        
    dispatch(post_register(values, history))
  };
  return (
    <LayoutLogRes person={imgPerson}>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <div className="register-container">
        <div className="title">
          <h1>Create Account</h1>
          <img src={emoji_metal} alt="" />
        </div>
        <p className="desc">Join to share your knowledge based on your field</p>
        <Form
          form={form}
          layout="vertical"                                        
          onFinish={onFinish}
          >
          <Form.Item 
            label="Fullname"
            name="fullname"
            required={false}
            rules={[
              {
                required: true,
                message: 'Please input your fullname!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item 
            label="Affiliation (ex. Telkom University)" 
            name="affiliation"
            required={false}
            rules={[
              {
                required: true,
                message: 'Please input your affiliation!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item 
            label="Email" 
            name="email" 
            required={false}
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <Form.Item 
              label="Password" 
              name="password" 
              required={false}
              tooltip="This is a required field"
              rules={[
              {
                  required: true,
                  message: 'Please input your password!',
              },
              ]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)'}}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              required={false}
              rules={[
              {
                  required: true,
                  message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                  validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
              }),
              ]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
            >
                <Input.Password />
            </Form.Item>
          </Form.Item>          
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
            {
                validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
            ]}
          >
              <Checkbox>
                  By registering you agree to the {' '}
                  <span  
                    onClick={() => dispatch(toggle_popup("modal_tnc", true, false, false))}
                    style={{textDecoration: 'underline', color: '#1890ff'}}
                  >
                    Terms &amp; Conditions 
                  </span>
              </Checkbox>
          </Form.Item>     
          <Form.Item shouldUpdate>
              {() => (
              <Button
                  shape="round" 
                  size="large" 
                  type="primary"
                  htmlType="submit"                            
                  block
              >
                  Register
              </Button>
              )}
          </Form.Item>
        </Form>
        <p className="regis-link">Already have an account? <Link to="/login">Login</Link> </p>
      </div>
    </LayoutLogRes>
  )
}

export default Register
