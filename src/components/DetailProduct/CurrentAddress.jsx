import React, { useState, useEffect } from 'react';
import { Button, Card, Typography, Modal, Input, Select, Form, Flex } from 'antd';

import addressApi from '../../services/api/addressApi';

const { Text, Title } = Typography;
const { Option } = Select;

const CurrentAddress = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalType, setModalType] = useState('view'); // 'view' or 'edit'
    const [currentAddress, setCurrentAddress] = useState();

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const response = await addressApi.myAddresses();
                setCurrentAddress(response.data);

                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAddress();
    }, []);


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
        setCurrentAddress((prevAddress) => ({
            ...prevAddress,
            ...changedValues,
        }));

        console.log(changedValues);
    };

    // create

    const handleCreateAddress = async (values) => {
        console.log(values);
    };


    return (
        <Card style={{ width: '100%', padding: '16px', marginTop: '16px' }}>
            <Title level={5} style={{ fontWeight: '500' }}>
                Vận Chuyển
            </Title>
            <Flex style={{ marginBottom: '8px' }}>
                <Flex size="large" align="center" >
                    <Text strong style={{ marginRight: '8px' }} >{currentAddress?.fullName}</Text>
                    <Text>,{currentAddress?.phoneNumber}</Text>
                </Flex>
                <Text style={{ marginLeft: '8px' }} >{currentAddress?.city}, {currentAddress?.district}, {currentAddress?.specificAddress}</Text>
            </Flex>
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
                    layout="vertical"
                    initialValues={currentAddress}
                    onValuesChange={handleAddressChange}
                    onFinish={handleCreateAddress}
                >
                    <Form.Item label="Họ và tên" name="name" >
                        <Input placeholder="Enter your name" defaultValue={currentAddress?.fullName} />
                    </Form.Item>

                    <Form.Item label="Số điện thoại" name="phoneNumber">
                        <Input placeholder="Enter your phone number" defaultValue={currentAddress?.phoneNumber} />
                    </Form.Item>

                    <Form.Item label="Thành phố" name="city">
                        <Select placeholder="Select city" defaultValue={currentAddress?.city} >
                            <Option value="Hồ Chí Minh" >Hồ Chí Minh</Option>
                            <Option value="Hà Nội">Hà Nội</Option>
                            <Option value="Đà Nẵng">Đà Nẵng</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Quận/Huyện" name="district">
                        <Select placeholder="Select district" defaultValue={currentAddress?.district}>
                            <Option value="Quận 1">Quận 1</Option>
                            <Option value="Quận 2">Quận 2</Option>
                            <Option value="Quận 3">Quận 3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Địa chỉ cụ thể" name="detailedAddress">
                        <Input.TextArea rows={4} placeholder="Enter your detailed address" defaultValue={currentAddress?.specificAddress} />
                    </Form.Item>
                </Form>
            </Modal >
        </Card>
    );
};

export default CurrentAddress;
