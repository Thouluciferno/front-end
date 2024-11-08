import React, { useState } from 'react';
import { Layout, Menu, Avatar, Select, Upload, message, Typography, Form, Input, Button, Card, Row, Col, DatePicker } from 'antd';

const { Text } = Typography;
const { Item: FormItem } = Form;
const { RangePicker } = DatePicker;

const UserProfile = () => {

    const handleSubmit = (values) => {
        console.log('Received values:', values);
        // Handle form submission
    };

    return (
        <>
            <Card title="Profile Info" style={{ marginBottom: '24px' }}>
                <Row gutter={[16, 16]} justify="start">
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Text strong>Username:</Text>
                    </Col>
                    <Col xs={24} sm={12} md={16} lg={18}>
                        <Text>John Doe</Text>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} justify="start">
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Text strong>Numberphone:</Text>
                    </Col>
                    <Col xs={24} sm={12} md={16} lg={18}>
                        <Text>1234567890</Text>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} justify="start">
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Text strong>Email:</Text>
                    </Col>
                    <Col xs={24} sm={12} md={16} lg={18}>
                        <Text>johndoe@example.com</Text>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} justify="start">
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Text strong>Birthday:</Text>
                    </Col>
                    <Col xs={24} sm={12} md={16} lg={18}>
                        <Text>01/01/1990</Text>
                    </Col>
                </Row>
            </Card>
            <Card title="Edit Profile">
                <Form layout="vertical" onFinish={handleSubmit}>
                    <Row gutter={[16, 16]} justify="start">
                        <Col xs={24} sm={12} lg={6}>
                            <FormItem
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                            <FormItem
                                label="Numberphone"
                                name="numberphone"
                                rules={[{ required: true, message: 'Please input your phone number!' }]}
                            >
                                <Input />
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                            <FormItem
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input />
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                            <FormItem
                                label="Birthday"
                                name="birthday"
                                rules={[{ required: true, message: 'Please select your birthday!' }]}
                            >
                                <DatePicker style={{ width: '100%' }} />
                            </FormItem>
                        </Col>
                    </Row>
                    <FormItem>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </FormItem>
                </Form>
            </Card>
        </>
    );
};

export default UserProfile;
