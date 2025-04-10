import React from 'react';
import { Space, Statistic, Card, Flex } from 'antd';
import { ShoppingCartOutlined, DollarCircleOutlined, UserOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';


const DashboardOverview = ({ orders = 0, revenue = 0, products = 0, customers = 0 }) => {


    const valueStyles = {
        totalOrders: { fontSize: '24px', color: '#1890ff' },
        totalRevenue: { fontSize: '24px', color: '#52c41a' },
        totalProducts: { fontSize: '24px', color: '#faad14' },
        totalCustomers: { fontSize: '24px', color: '#eb2f96' }
    };

    return (
        <Flex justify="center" gap="32px">
            <Card style={{ width: '200px' }}>
                <Statistic
                    title="Total Orders"
                    value={orders}
                    precision={0}
                    valueStyle={valueStyles.totalOrders}
                    prefix={<ShoppingCartOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
                />
            </Card>
            <Card style={{ width: '200px' }}>
                <Statistic
                    title="Total Revenue"
                    value={revenue}
                    precision={2}
                    valueStyle={valueStyles.totalRevenue}
                    prefix={<DollarCircleOutlined style={{ fontSize: '24px', color: '#52c41a' }} />}
                />
            </Card>
            <Card style={{ width: '200px' }}>
                <Statistic
                    title="Total Products"
                    value={products}
                    valueStyle={valueStyles.totalProducts}
                    prefix={<FundProjectionScreenOutlined style={{ fontSize: '24px', color: '#faad14' }} />}
                />
            </Card>
            <Card style={{ width: '200px' }}>
                <Statistic
                    title="Total Customers"
                    value={customers}
                    valueStyle={valueStyles.totalCustomers}
                    prefix={<UserOutlined style={{ fontSize: '24px', color: '#eb2f96' }} />}
                />
            </Card>
        </Flex>
    );
}

export default DashboardOverview;
