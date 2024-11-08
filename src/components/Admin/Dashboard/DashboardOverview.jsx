import React from 'react';
import { Space, Statistic, Card, Flex } from 'antd';
import { ShoppingCartOutlined, DollarCircleOutlined, TransactionOutlined, UserOutlined } from '@ant-design/icons';

const DashboardOverview = () => {
    // Sample data for statistics
    const totalSales = 5000;
    const totalOrders = 100;
    const totalCustomers = 50;
    const totalRevenue = 25000;

    // Define value styles for all Statistic components
    const valueStyles = {
        totalOrders: { fontSize: '24px', color: '#1890ff' },
        totalRevenue: { fontSize: '24px', color: '#52c41a' },
        totalSales: { fontSize: '24px', color: '#faad14' },
        totalCustomers: { fontSize: '24px', color: '#eb2f96' }
    };

    return (
        <Flex justify="center" gap="32px">
            <Card style={{ width: '200px' }}>
                <Statistic
                    title="Total Orders"
                    value={totalOrders}
                    valueStyle={valueStyles.totalOrders}
                    prefix={<ShoppingCartOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
                />
            </Card>
            <Card style={{ width: '200px' }}>
                <Statistic
                    title="Total Revenue"
                    value={`$${totalRevenue}`}
                    precision={2}
                    valueStyle={valueStyles.totalRevenue}
                    prefix={<DollarCircleOutlined style={{ fontSize: '24px', color: '#52c41a' }} />}
                />
            </Card>
            <Card style={{ width: '200px' }}>
                <Statistic
                    title="Total Sales"
                    value={totalSales}
                    valueStyle={valueStyles.totalSales}
                    prefix={<TransactionOutlined style={{ fontSize: '24px', color: '#faad14' }} />}
                />
            </Card>
            <Card style={{ width: '200px' }}>
                <Statistic
                    title="Total Customers"
                    value={totalCustomers}
                    valueStyle={valueStyles.totalCustomers}
                    prefix={<UserOutlined style={{ fontSize: '24px', color: '#eb2f96' }} />}
                />
            </Card>
        </Flex>
    );
}

export default DashboardOverview;
