// AdminLayout.js
import React from 'react';
import { Layout, Row, Col } from 'antd';
import { AdminFooter, AdminSidebar, AdminDashboard } from '../../components';

const { Content } = Layout;

const AdminLayout = ({ children }) => {
    return (
        <Layout>
            <Content>
                <Row>
                    <Col span={4}>
                        <AdminSidebar />
                    </Col>
                    <Col span={20}>
                        {children ? children : <AdminDashboard />}
                    </Col>
                </Row>
            </Content>
            <AdminFooter />
        </Layout>
    );
}

export default AdminLayout;
