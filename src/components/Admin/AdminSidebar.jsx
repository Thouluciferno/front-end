import React from 'react';
import { Menu, Dropdown } from 'antd';
import {
    DashboardOutlined,
    ShoppingOutlined,
    ProfileOutlined,
    UserOutlined,
    SettingOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom'; // assuming you're using React Router for routing

const { SubMenu } = Menu;

const AdminSidebar = () => {

    // Define mapping of menu item names to links
    const menuLinkMapping = {
        'Dashboard': '/admin/*',
        'Tạo Sản Phẩm': '/admin/products',
        'Danh Sách Sản Phẩm': '/product-list',
        'Orders': '/orders',
        'Order 1': '/order-1',
        'Order 2': '/order-2',
        'Customers': '/customers',
        'Customer 1': '/customer-1',
        'Customer 2': '/customer-2',
        'Settings': '/settings',
        'General': '/general-settings',
        'Security': '/security-settings'
    };

    // Function to generate menu items with links
    const generateMenuItem = (name) => {
        const link = menuLinkMapping[name];
        return (
            <Menu.Item key={name} icon={getIcon(name)}>
                <Link to={link}>{name}</Link>
            </Menu.Item>
        );
    };

    // Function to get icon based on menu item name
    const getIcon = (name) => {
        switch (name) {
            case 'Dashboard':
                return <DashboardOutlined />;
            case 'Tạo Sản Phẩm':
            case 'Danh Sách Sản Phẩm':
                return <ShoppingOutlined />;
            case 'Orders':
            case 'Order 1':
            case 'Order 2':
                return <ProfileOutlined />;
            case 'Customers':
            case 'Customer 1':
            case 'Customer 2':
                return <UserOutlined />;
            case 'Settings':
            case 'General':
            case 'Security':
                return <SettingOutlined />;
            default:
                return null;
        }
    };

    return (
        <Menu style={{ height: '100vh' }}>
            {generateMenuItem('Dashboard')}
            <SubMenu key="products" title="Products" icon={<ShoppingOutlined />}>
                {generateMenuItem('Tạo Sản Phẩm')}
                {generateMenuItem('Danh Sách Sản Phẩm')}
            </SubMenu>
            <SubMenu key="orders" title="Orders" icon={<ProfileOutlined />}>
                {generateMenuItem('Order 1')}
                {generateMenuItem('Order 2')}
            </SubMenu>
            <SubMenu key="customers" title="Customers" icon={<UserOutlined />}>
                {generateMenuItem('Customer 1')}
                {generateMenuItem('Customer 2')}
            </SubMenu>
            <SubMenu key="settings" title="Settings" icon={<SettingOutlined />}>
                {generateMenuItem('General')}
                {generateMenuItem('Security')}
            </SubMenu>
        </Menu>
    );
}

export default AdminSidebar;
