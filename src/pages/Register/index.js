import React from 'react';
import { Form, Input, Button } from 'antd';
import LayoutLogRes from '../../components/LayoutLogRes'
import emoji_metal from '../../assets/images/Emoji_metal.png'
import imgPerson from '../../assets/images/person_regis.png'
import './Register.scss'
import { Link } from 'react-router-dom';

const Register = () => {
    const [form] = Form.useForm();
    const requiredMark = 'optional';
    
    return (
        <LayoutLogRes person={imgPerson}>
            <div className="login-container">
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
                    >                    
                    <Form.Item label="Username" required tooltip="This is a required field">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Email" required tooltip="This is a required field">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item style={{ marginBottom: 0 }}>
                        <Form.Item
                        label="Password"
                        name="Password"
                        rules={[{ required: true }]}
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                        >
                            <Input placeholder="Input birth year" />
                        </Form.Item>
                        <Form.Item
                        label="Confirm Password"
                        name="ConfirmPassword"
                        rules={[{ required: true }]}
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                        >
                            <Input placeholder="Input birth month" />
                        </Form.Item>
                    </Form.Item>
                    {/* <Form.Item
                        label=""
                        tooltip={{
                        title: 'Tooltip with customize icon',
                        icon: <InfoCircleOutlined />,
                        }}
                    >
                        <Input placeholder="input placeholder" bordered />
                    </Form.Item> */}
                    <Form.Item>
                        <Button type="primary" shape="round" size="large" block>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
                <p className="regis-link">Already have an account? <Link to="/">Login</Link> </p>
            </div>
        </LayoutLogRes>
    )
}

export default Register
