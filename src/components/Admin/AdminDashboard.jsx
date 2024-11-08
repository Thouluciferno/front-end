import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
import DashboardOverview from './Dashboard/DashboardOverview';
import DashboardStatistic from './Dashboard/DashboardStatistic';

const { Content } = Layout;

const AdminDashboard = () => {
    return (
        <Layout>
            <Content style={{ padding: '24px' }}>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <Card title="Overview" style={{ width: '100%' }}>
                            <DashboardOverview />
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card style={{ width: '100%' }}>
                            <DashboardStatistic />
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default AdminDashboard;
