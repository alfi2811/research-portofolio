import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import LayoutLogRes from '../../components/LayoutLogRes'
import emoji_metal from '../../assets/images/Emoji_metal.png'
import imgPerson from '../../assets/images/person_regis.png'
import './Register.scss'
import { Link } from 'react-router-dom';
import { post_register } from '../../redux/actions/main';
import { useDispatch } from 'react-redux';

const Register = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const requiredMark = 'optional';
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        dispatch(post_register(values))
    };
    return (
        <LayoutLogRes person={imgPerson}>
            <div className="register-container">
                <div className="title">
                    <h1>Create Account</h1>
                    <img src={emoji_metal} alt="" />
                </div>
                <p className="desc">Join to share your knowledge based on your field</p>
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{
                        requiredMarkValue: requiredMark,
                    }}                    
                    requiredMark={requiredMark}
                    onFinish={onFinish}
                    >                  
                    <Form.Item label="Fullname" name="username" required tooltip="This is a required field">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Affiliation (ex. Telkom University)" name="affi" required tooltip="This is a required field">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email" required tooltip="This is a required field">
                        <Input/>
                    </Form.Item>
                    <Form.Item style={{ marginBottom: 0 }}>
                        <Form.Item 
                            label="Email" 
                            name="password" 
                            required 
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
                        {/* <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                            hasFeedback
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                        >
                            <Input.Password />
                        </Form.Item> */}
                        
                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
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
                            By registering you agree to the <a href="https://www.google.com/">Terms & Conditions </a>
                        </Checkbox>
                    </Form.Item>     
                    <Form.Item shouldUpdate>
                        {() => (
                        <Button
                            shape="round" 
                            size="large" 
                            type="primary"
                            htmlType="submit"
                            disabled={
                            !form.isFieldsTouched(true) ||
                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
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
