import React, { useState, useEffect } from 'react';
import { Button, Card, Typography, Modal, Input, Select, Form, message } from 'antd';

import addressApi from '../../services/api/addressApi';

const { Text, Title } = Typography;
const { Option } = Select;

const CurrentAddress = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalType, setModalType] = useState('view');
    const [currentAddress, setCurrentAddress] = useState({});
    const [form] = Form.useForm();

    // Fetch current address on component mount
    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const response = await addressApi.myAddresses();

                setCurrentAddress(response.data);

                form.setFieldsValue(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAddress();
    }, [form]);

    const showModal = (type) => {
        setModalType(type);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();


            console.log(values);

            if (modalType === 'edit') {

                if (currentAddress.id === undefined) {
                    await addressApi.create(values);
                } else {
                    values.id = currentAddress.id;
                    await addressApi.update(values);
                }

                message.success('Address updated successfully!');

                setCurrentAddress(values);
            }

            setIsModalVisible(false);
        } catch (error) {
            console.error(error);
            message.error('Failed to update address!');
        }
    };

    return (
        <Card style={{ width: '100%', padding: '16px', marginTop: '16px' }}>
            <Title level={5} style={{ fontWeight: '500' }}>
                Vận Chuyển
            </Title>
            <div style={{ marginBottom: '8px' }}>
                <Text strong>{currentAddress?.fullName} </Text>,
                <Text> {currentAddress?.phoneNumber}</Text>
            </div>
            <Text>
                {currentAddress?.city} , {currentAddress?.district} , {currentAddress?.specificAddress}
            </Text>

            <Button type="primary" onClick={() => showModal('edit')}>
                Edit Address
            </Button>

            <Modal
                title={modalType === 'edit' ? 'Edit Address' : 'View Address'}
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText={modalType === 'edit' ? 'Save' : 'OK'}
                cancelText="Cancel"
            >
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={currentAddress}
                >
                    <Form.Item
                        label="Họ và tên"
                        name="fullName"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input placeholder="Enter your name" />
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        name="phoneNumber"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input placeholder="Enter your phone number" />
                    </Form.Item>

                    <Form.Item
                        label="Thành phố"
                        name="city"
                        rules={[{ required: true, message: 'Please select your city!' }]}
                    >
                        <Select placeholder="Select city">
                            <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
                            <Option value="Hà Nội">Hà Nội</Option>
                            <Option value="Đà Nẵng">Đà Nẵng</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Quận/Huyện"
                        name="district"
                        rules={[{ required: true, message: 'Please select your district!' }]}
                    >
                        <Select placeholder="Select district">
                            <Option value="Quận 1">Quận 1</Option>
                            <Option value="Quận 2">Quận 2</Option>
                            <Option value="Quận 3">Quận 3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Địa chỉ cụ thể"
                        name="specificAddress"
                        rules={[{ required: true, message: 'Please input your detailed address!' }]}
                    >
                        <Input.TextArea rows={4} placeholder="Enter your detailed address" />
                    </Form.Item>
                </Form>
            </Modal>
        </Card>
    );
};

export default CurrentAddress;
