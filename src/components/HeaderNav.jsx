import React, { useState } from 'react';
import { Layout, Menu, Dropdown, Badge } from 'antd';
import { Link } from 'react-router-dom';


import { UserOutlined, ShoppingCartOutlined, NotificationOutlined } from '@ant-design/icons';
import { BsGrid1X2Fill } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsFillArchiveFill } from "react-icons/bs";
import img from "../assets/logo/image.png";

import { Typography } from 'antd';
import { Space } from 'antd';

const { Text } = Typography;


const { Header } = Layout;

const notificationMenu = (
    <Menu>
        <Menu.Item>
            <Link to="/notification1">
                <Space style={{ alignItems: 'center' }}>
                    <img src={img} alt="notification1" style={{ width: '80px' }} />
                    <Text style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text strong>Library Stool Chair</Text>
                        <Text style={{ color: 'gray', fontSize: '12px' }}>components to adjust the layout based on
                            different screen sizes. Here's how you can modify the code:</Text>
                    </Text>
                </Space>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/notification2">
                <Space style={{ alignItems: 'center' }}>
                    <img src={img} alt="notification2" style={{ width: '80px' }} />
                    <Text style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text strong>Library Stool Chair</Text>
                        <Text style={{ color: 'gray', fontSize: '12px' }}>components to adjust the layout based on
                            different screen sizes. Here's how you can modify the code:</Text>
                    </Text>
                </Space>
            </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <Link to="/view-all-notifications">View All Notifications</Link>
        </Menu.Item>
    </Menu>
);
const HeaderNav = () => {
    // Replace loggedIn state with a function to check token
    const isAuthenticated = () => {
        return localStorage.getItem('token') !== null;
    };



    return (
        <Header style={{ width: '100%', backgroundColor: "white" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {/* Left menu */}
                <Menu theme="light" mode="horizontal" style={{ flex: 1, display: "flex" }}>
                    <Menu.Item key="logo" style={{ padding: '0', margin: '0', height: '64px', fontSize: "20px", fontWeight: "bold", letterSpacing: "5px", textAlign: "center" }}>
                        <Link to="/">
                            <img src={img} alt="logo" style={{ width: "64px", objectFit: "fit" }} /> CLOTHING
                        </Link>
                    </Menu.Item>
                    {/* Home,Products,About */}
                    <Menu.Item key="1" icon={<BsGrid1X2Fill />} >
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<MdOutlineProductionQuantityLimits />} >
                        <Link to="/products">Products</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<BsFillArchiveFill />} >
                        <Link to="/about">About</Link>
                    </Menu.Item>
                </Menu>
                {/* Right menu */}
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
                    {isAuthenticated() && (
                        <Menu.Item key="3">
                            <Dropdown overlay={notificationMenu}>
                                <Link to="/notifications" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Badge dot={1}>
                                        <NotificationOutlined />
                                    </Badge>
                                    Notifications
                                </Link>
                            </Dropdown>
                        </Menu.Item>
                    )}
                    <Menu.Item key="2" icon={<ShoppingCartOutlined />} >
                        <Link to="/cart">Cart</Link>
                    </Menu.Item>
                    {isAuthenticated() ? (
                        <Menu.Item key="1" icon={<UserOutlined />} >
                            <Link to="/profile">Profile</Link>
                        </Menu.Item>
                    ) : (
                        <Menu.Item key="1" icon={<UserOutlined />} >
                            <Link to="/login">Login</Link>
                        </Menu.Item>
                    )}
                    {!isAuthenticated() &&

                        <Menu.Item key="5">
                            <Link to="/register">Register</Link>
                        </Menu.Item>
                    }
                </Menu>
            </div>
        </Header>
    );
};

export default HeaderNav;