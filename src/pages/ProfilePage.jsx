import React, { useState, useEffect } from 'react';
import { Layout, Menu, Avatar, Upload, message, Typography, Row, Col } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { OrderProfile, UserProfile, Pagination } from "../components/index";

import orderDetailApi from '../services/api/orderDetailApi';

import "./ProfilePage.css";

const { Content, Sider } = Layout;
const { Text } = Typography;

const ProfilePage = () => {
    const [items, setItems] = useState([]);
    const [avatar, setAvatar] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;

    const navigate = useNavigate();

    const handleAvatarChange = (info) => {
        if (info.file.status === 'done') {
            setAvatar(info.file.originFileObj);
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const fetchOrderDetails = async () => {
        try {
            const response = await orderDetailApi.getOrderDetail();
            setItems(response.data);
        } catch (error) {
            console.error("Error fetching order details:", error);
        }
    };

    useEffect(() => {
        fetchOrderDetails();
    }, []);

    const totalPages = Math.ceil(items.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, items.length);
    const slicedItems = items.slice(startIndex, endIndex);

    return (
        <Layout className="layout" style={{ backgroundColor: "white", marginTop: "24px" }}>
            <Sider width={300} style={{ background: '#fff' }}>
                <Row justify="center" align="middle" style={{ margin: '24px 0' }}>
                    <Col>
                        <Upload beforeUpload={() => false} onChange={handleAvatarChange}>
                            {avatar ? (
                                <Avatar size={64} src={URL.createObjectURL(avatar)} />
                            ) : (
                                <Avatar size={64} icon={<UserOutlined />} />
                            )}
                        </Upload>
                    </Col>
                    <Col style={{ marginLeft: '16px' }}>
                        <Text>User Name</Text>
                    </Col>
                </Row>
                <Menu
                    mode="inline"
                    onClick={({ key }) => navigate(key)}
                >
                    <Menu.Item key="user" icon={<UserOutlined />}>
                        Profile
                    </Menu.Item>
                    <Menu.Item key="orders" icon={<ShoppingCartOutlined />}>
                        Orders
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <Routes>
                        <Route path="user" element={<UserProfile />} />
                        <Route
                            path="orders"
                            element={
                                <>
                                    <OrderProfile items={slicedItems} />
                                    <Pagination
                                        total={items.length}
                                        pageSize={pageSize}
                                        current={currentPage}
                                        onChange={handlePageChange}
                                    />
                                </>
                            }
                        />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

export default ProfilePage;
