import React from 'react';
import { Form, Input, Button, Typography, Space, Card, message } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined, GoogleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosConfig';

const { Title } = Typography;

const RegisterPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/users', {
                username,
                email,
                password,
                phoneNumber
            });

            // console.log(response);

            const token = response.data.result.token;
            console.log(token);
            // Save token to localStorage
            localStorage.setItem('token', token);

            message.success('Registration successful!');
            navigate('/'); // Navigate to homepage
        } catch (error) {
            console.error('Registration failed:', error.response?.data || error.message);
            message.error('Registration failed. Please try again.');
        }
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
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined />} value={username} onChange={handleUsernameChange} />
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
                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        dependencies={['password']}
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
                                    return Promise.reject(new Error('The two passwords do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined />} />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        name="phoneNumber"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your phone number!',
                            },
                        ]}
                    >
                        <Input prefix={<PhoneOutlined />} value={phoneNumber} onChange={handlePhoneNumberChange} />
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
