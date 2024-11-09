import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography, Space, Card, message } from 'antd';
import { GoogleOutlined, LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import axios from '../utils/axiosConfig';


const { Title } = Typography;

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/auth/token', { username, password });
            console.log(response.data.result.token);
            const token = response.data.result.token;
            localStorage.setItem('token', token);
            message.success('Login successful');
            navigate('/'); // Navigate to the homepage
        } catch (error) {
            console.error('Login error:', error);
            message.error('Login failed. Please check your credentials.');
        }
    };

    return (

        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <Card>
                <Title level={2}>Login</Title>
                <Form layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your username!',
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined />} type="text" value={username} onChange={handleUsernameChange} />
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
