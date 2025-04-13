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
        'Dashboard': '/admin',
        'Danh Sách Sản Phẩm': '/admin/products',
        'Orders': '/orders',
        'Customers': '/customers',
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
            case 'Danh Sách Sản Phẩm':
                return <ShoppingOutlined />;
            case 'Orders':
                return <ProfileOutlined />;
            case 'Customers':
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
                {generateMenuItem('Danh Sách Sản Phẩm')}
            </SubMenu>
            <SubMenu key="orders" title="Orders" icon={<ProfileOutlined />}>
                {generateMenuItem('Orders Detail')}
            </SubMenu>
            <SubMenu key="customers" title="Customers" icon={<UserOutlined />}>
            </SubMenu>
            <SubMenu key="settings" title="Settings" icon={<SettingOutlined />}>
                {generateMenuItem('General')}
                {generateMenuItem('Security')}
            </SubMenu>
        </Menu>
    );
}

export default AdminSidebar;
