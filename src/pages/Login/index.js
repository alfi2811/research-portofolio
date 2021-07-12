import React from 'react';
import { Form, Input, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import LayoutLogRes from '../../components/LayoutLogRes'
import emoji from '../../assets/images/Emoji.png'
import './Login.scss'
import { Link } from 'react-router-dom';

const Login = () => {
    const [form] = Form.useForm();
    const requiredMark = 'optional';
    
    return (
        <LayoutLogRes>
            <div className="login-container">
                <div className="title">
                    <h1>Welcome Back</h1>
                    <img src={emoji} alt="" />
                </div>
                <p className="desc">Discover best research that match your field</p>
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
                    <Form.Item
                        label="Field B"
                        tooltip={{
                        title: 'Tooltip with customize icon',
                        icon: <InfoCircleOutlined />,
                        }}
                    >
                        <Input placeholder="input placeholder" bordered />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" shape="round" size="large" block>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
                <p className="regis-link">Dont have an account? <Link>Register</Link> </p>
            </div>
        </LayoutLogRes>
    )
}

export default Login
