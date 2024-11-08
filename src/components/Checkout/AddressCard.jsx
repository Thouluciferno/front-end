import React, { useState } from 'react';
import { Button, Card, Space, Typography, Modal, Input, Select } from 'antd';
import { Flex } from 'antd';

const { Text, Title } = Typography;
const { Option } = Select;

const AddressCard = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalType, setModalType] = useState('view'); // 'view' or 'add'
    const [currentAddress, setCurrentAddress] = useState({
        name: 'Thien hoang',
        phoneNumber: '0941353632',
        city: 'Hồ Chí Minh',
        district: 'Quận 1',
        detailedAddress: 'gần Trường Thcs Long Thới, Quốc Lộ 60, Xã Long Thới, Huyện Tiểu Cần, Trà Vinh'
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

    return (
        <Flex vertical justify="space-between">
            <div>
                <Title level={3} style={{ fontWeight: 'bold', color: 'orange' }}>
                    Địa Chỉ Nhận Hàng
                </Title>
                <Space size="large" align='center' style={{ marginRight: '24px' }}>
                    <Text strong style={{ fontWeight: 'bold' }}>{currentAddress.name}, {currentAddress.phoneNumber}</Text>
                    <Text>{currentAddress.detailedAddress}</Text>
                </Space>
                <Button onClick={() => showModal('edit')}>Edit Address</Button>
            </div>
            <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div>
                    <p>Họ và tên:</p>
                    <Input placeholder="Enter your name" />
                    <p>Số điện thoại:</p>
                    <Input placeholder="Enter your phone number" />
                    <p>Select city:</p>
                    <Select defaultValue="Hồ Chí Minh" style={{ width: 120 }}>
                        <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
                        <Option value="Hà Nội">Hà Nội</Option>
                        {/* Add more options as needed */}
                    </Select>
                    <p>Quận/Huyện:</p>
                    <Select defaultValue="Quận 1" style={{ width: 120 }}>
                        <Option value="Quận 1">Quận 1</Option>
                        <Option value="Quận 2">Quận 2</Option>
                        {/* Add more options as needed */}
                    </Select>
                    <p>Địa chỉ cụ thể:</p>
                    <Input.TextArea rows={4} placeholder="Enter your detailed address" />
                </div>
            </Modal>
        </Flex>
    );
}

export default AddressCard;
