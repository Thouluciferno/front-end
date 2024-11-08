import React, { useState } from 'react';
import { Form, Input, Button, Typography, Space, Card } from 'antd';
import { GoogleOutlined, LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';

const { Title } = Typography;

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here, such as sending the email and password to the server for authentication
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (

        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <Card>
                <Title level={2}>Login</Title>
                <Form layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your email!',
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined />} type="email" value={email} onChange={handleEmailChange} />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your password!',
                            },
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined />} value={password} onChange={handlePasswordChange} />
                    </Form.Item>
                    <Form.Item>
                        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                            {/* Google login */}

                            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                <UserOutlined /> Login
                            </Button>
                            <Button type="primary" icon={<GoogleOutlined />} style={{ background: '#DB4437', borderColor: '#DB4437', width: '100%' }} href="/auth/google" >
                                Login with Google
                            </Button>
                            <Button type="link" href="/forgot-password" >
                                <LockOutlined /> Forgot Password
                            </Button>
                            <Button type="link" href="/register">
                                <UserOutlined /> Register
                            </Button>

                        </Space>
                    </Form.Item>
                </Form>
            </Card >
        </div>
    );
}

export default LoginPage;
