import React, { useState } from 'react';
import { Button, Card, Space, Typography, Modal, Input, Select, Form } from 'antd';

import userApi from '../../services/api/userApi';

const { Text, Title } = Typography;
const { Option } = Select;

const CurrentAddress = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalType, setModalType] = useState('view'); // 'view' or 'edit'
    const [currentAddress, setCurrentAddress] = useState({
        name: 'Thien Hoang',
        phoneNumber: '0941353632',
        city: 'Hồ Chí Minh',
        district: 'Quận 1',
        detailedAddress: 'Gần Trường Thcs Long Thới, Quốc Lộ 60, Xã Long Thới, Huyện Tiểu Cần, Trà Vinh',
    });

    const showModal = (type) => {
        setModalType(type);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleAddressChange = (changedValues) => {
        setCurrentAddress((prev) => ({
            ...prev,
            ...changedValues,
        }));
    };

    return (
        <Card style={{ width: '100%', padding: '16px', marginTop: '24px' }}>
            <Title level={5} style={{ fontWeight: '500' }}>
                Vận Chuyển
            </Title>
            <Space size="large" align="center" style={{ marginBottom: '16px' }}>
                <Text strong>
                    {currentAddress.name}, {currentAddress.phoneNumber}
                </Text>
                <Text>{currentAddress.detailedAddress}</Text>
            </Space>
            <Button type="primary" onClick={() => showModal('edit')}>
                Edit Address
            </Button>

            <Modal
                title={modalType === 'edit' ? 'Edit Address' : 'View Address'}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText={modalType === 'edit' ? 'Save' : 'OK'}
                cancelText="Cancel"
            >
                <Form
                    layout="vertical"
                    initialValues={currentAddress}
                    onValuesChange={handleAddressChange}
                >
                    <Form.Item label="Họ và tên" name="name">
                        <Input placeholder="Enter your name" />
                    </Form.Item>

                    <Form.Item label="Số điện thoại" name="phoneNumber">
                        <Input placeholder="Enter your phone number" />
                    </Form.Item>

                    <Form.Item label="Thành phố" name="city">
                        <Select placeholder="Select city">
                            <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
                            <Option value="Hà Nội">Hà Nội</Option>
                            <Option value="Đà Nẵng">Đà Nẵng</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Quận/Huyện" name="district">
                        <Select placeholder="Select district">
                            <Option value="Quận 1">Quận 1</Option>
                            <Option value="Quận 2">Quận 2</Option>
                            <Option value="Quận 3">Quận 3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Địa chỉ cụ thể" name="detailedAddress">
                        <Input.TextArea rows={4} placeholder="Enter your detailed address" />
                    </Form.Item>
                </Form>
            </Modal>
        </Card>
    );
};

export default CurrentAddress;
