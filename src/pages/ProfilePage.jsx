import React, { useState } from 'react';
import { Layout, Menu, Avatar, Upload, message, Typography, Row, Col } from 'antd'; // Import Pagination
import { UserOutlined, ShoppingCartOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { CartProfile, UserProfile, Pagination } from "../components/index";
import "./ProfilePage.css";

const { Content, Sider } = Layout;
const { Text } = Typography;

const ProfilePage = () => {
    const [selectedMenuKey, setSelectedMenuKey] = useState("profile");
    const [avatar, setAvatar] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4; // Number of items per page

    const handleMenuClick = (e) => {
        setSelectedMenuKey(e.key);
    };

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

    // Sample item data
    const items = [
        {
            img: "../assets/chair/Image.png",
            title: 'Sample Product 1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            quantity: 2,
            price: 25.99
        },
        {
            img: "../assets/chair/Image.png",
            title: 'Sample Product 2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            quantity: 4,
            price: 25.99
        },
        {
            img: "../assets/chair/Image.png",
            title: 'Sample Product 3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            quantity: 3,
            price: 25.99
        },
        {
            img: "../assets/chair/Image.png",
            title: 'Sample Product 3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            quantity: 3,
            price: 25.99
        },

        {
            img: "../assets/chair/Image.png",
            title: 'Sample Product 3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            quantity: 3,
            price: 25.99
        }
    ];

    // Calculate total number of pages
    const totalPages = Math.ceil(items.length / pageSize);

    // Slice items array based on current page and page size
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, items.length);
    const slicedItems = items.slice(startIndex, endIndex);

    return (
        <Layout className="layout" style={{ backgroundColor: "white", marginTop: "24px" }}>
            <Sider width={300} style={{ background: '#fff' }}>
                <Row justify="center" align="middle" style={{ margin: '24px 0' }}>
                    <Col>
                        <Upload
                            beforeUpload={() => false}
                            onChange={handleAvatarChange}
                        >
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
                    selectedKeys={[selectedMenuKey]}
                    onClick={handleMenuClick}
                >
                    <Menu.Item key="profile" icon={<UserOutlined />}>
                        Profile Info
                    </Menu.Item>
                    <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
                        Cart Info
                    </Menu.Item>
                    <Menu.Item key="something" icon={<InfoCircleOutlined />}>
                        Something Info
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    {selectedMenuKey === 'profile' && (
                        <div>
                            <UserProfile />
                        </div>
                    )}
                    {selectedMenuKey === 'cart' && (
                        <div>
                            <CartProfile items={slicedItems} />
                            <Pagination
                                total={items.length}
                                pageSize={pageSize}
                                current={currentPage}
                                onChange={handlePageChange}
                            />
                        </div>
                    )}
                </Content>
            </Layout>
        </Layout>
    );
}

export default ProfilePage;
