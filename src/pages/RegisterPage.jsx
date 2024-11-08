import React, { useState } from 'react';
import { Form, Input, Button, Typography, Space, Card } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { GoogleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const RegisterPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here, such as sending the user's data to the server for registration
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    // Function to handle Google registration
    const handleGoogleRegister = () => {
        // Add logic for Google registration here
        console.log('Registering with Google');
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <Card>

                <Title level={2}>Register</Title>
                <Form layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your full name!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined />} value={fullName} onChange={handleFullNameChange} />
                    </Form.Item>
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
                    {/* confirm password */}
                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                        ]} >
                        <Input.Password prefix={<LockOutlined />} value={password} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                    <Button type="primary" icon={<GoogleOutlined />} style={{ background: '#DB4437', borderColor: '#DB4437', width: '100%' }} href="/auth/google" >
                        Register with Google
                    </Button>

                    <Button type="link" href="/login" >
                        <LockOutlined /> You Have a account?
                    </Button>
                </Space>
            </Card>
        </div >
    );
}

export default RegisterPage;
