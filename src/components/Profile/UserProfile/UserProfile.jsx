import React, { useState, useEffect } from 'react';
import { message, Typography, Form, Input, Button, Card, Row, Col, Spin } from 'antd';

import { userApiWithAuth } from '../../../services/api/userApi';


const { Text } = Typography;
const { Item: FormItem } = Form;

const UserProfile = () => {
    const [userData, setUserData] = useState({
        username: '',
        numberphone: '',
        email: '',
        birthday: null
    });
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        setLoading(true);
        try {
            const response = await userApiWithAuth.myInfo();


            const { result } = response.data;

            console.log(result);

            setUserData({
                username: result.username,
                numberPhone: result.numberPhone,
                email: result.email,
            });

            form.setFieldsValue({
                username: result.username,
                numberPhone: result.numberPhone,
                email: result.email,
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
            message.error('Failed to load user profile');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const formData = {
                username: values.username,
                numberPhone: values.numberPhone,
                email: values.email
            };

            await userApiWithAuth.updateProfile(formData);
            message.success('Profile updated successfully');
            await fetchUserData();
        } catch (error) {
            console.error('Error updating profile:', error);
            message.error(error.response?.data?.message || 'Failed to update profile');
        } finally {
            setLoading(false);
        }
    };


    return (
        <Spin spinning={loading}>
            <Card title="Profile Info" style={{ marginBottom: '24px' }}>
                <Row gutter={[16, 16]} justify="start">
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Text strong>Username</Text>
                    </Col>
                    <Col xs={24} sm={12} md={16} lg={18}>
                        <Text>{userData.username}</Text>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} justify="start">
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Text strong>NumberPhone:</Text>
                    </Col>
                    <Col xs={24} sm={12} md={16} lg={18}>
                        <Text>{userData.numberPhone}</Text>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} justify="start">
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Text strong>Email:</Text>
                    </Col>
                    <Col xs={24} sm={12} md={16} lg={18}>
                        <Text>{userData.email}</Text>
                    </Col>
                </Row>
            </Card>

            <Card title="Edit Profile">
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    initialValues={userData}
                >
                    <Row gutter={[16, 16]} justify="start">
                        {/* <Col xs={24} sm={12} lg={6}>
                            <FormItem
                                label="Username"
                                name="username"
                                rules={[
                                    { required: true, message: 'Please input your username!' },
                                    { min: 3, message: 'Username must be at least 3 characters' }
                                ]}
                            >
                                <Input />
                            </FormItem>
                        </Col> */}
                        <Col xs={24} sm={12} lg={6}>
                            <FormItem
                                label="Phone Number"
                                name="numberPhone"
                                rules={[
                                    {
                                        required: true, message: 'Please input your phone number!',
                                    },
                                    { min: 10, message: 'Phone number must be at least 10 characters' },
                                    { max: 10, message: 'Phone number must be at most 10 characters' }
                                ]}
                            >
                                <Input />
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                            <FormItem
                                label="Email"
                                name="email"
                                rules={[
                                    { required: true, message: 'Please input your email!' },
                                    { type: 'email', message: 'Please enter a valid email!' }
                                ]}
                            >
                                <Input />
                            </FormItem>
                        </Col>
                    </Row>
                    <FormItem>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Save
                        </Button>
                    </FormItem>
                </Form>
            </Card>
        </Spin>
    );
};

export default UserProfile;
