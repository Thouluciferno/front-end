import React, { useEffect, useState } from 'react';
import { Layout, Row, Col, Card } from 'antd';
import DashboardOverview from './Dashboard/DashboardOverview';
import DashboardStatistic from './Dashboard/DashboardStatistic';

import statisticsApi from '../../services/api/statisticsApi';

const { Content } = Layout;

const AdminDashboard = () => {

    // set orders total
    const [orders, setOrders] = useState([]);
    // set products total
    const [products, setProducts] = useState([]);
    // set customers total
    const [customers, setCustomers] = useState([]);
    // set revenue total
    const [revenue, setRevenue] = useState([]);
    // set top 10 products
    const [topProducts, setTopProducts] = useState([]);

    // Fetch statistics data when the component mounts

    useEffect(() => {
        const fetchStatistics = async () => {
            try {
                const ordersResponse = await statisticsApi.getOrders();
                const productsResponse = await statisticsApi.getProducts();
                const customersResponse = await statisticsApi.getCustomers();
                const revenueResponse = await statisticsApi.getRevenue();
                const topProductsResponse = await statisticsApi.getTop10Products();

                setOrders(ordersResponse.data);
                setProducts(productsResponse.data);
                setCustomers(customersResponse.data);
                setRevenue(revenueResponse.data);
                // top
                setTopProducts(topProductsResponse.data);
            } catch (error) {
                console.error('Error fetching statistics:', error);
            }
        };
        fetchStatistics();
    }, []);

    return (
        <Layout>
            <Content style={{ padding: '24px' }}>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <Card title="Overview" style={{ width: '100%' }}>
                            <DashboardOverview
                                orders={orders}
                                products={products}
                                customers={customers}
                                revenue={revenue}
                            />
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card style={{ width: '100%' }}>
                            <DashboardStatistic topProducts={topProducts} />
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default AdminDashboard;
