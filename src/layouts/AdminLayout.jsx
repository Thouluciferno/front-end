import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Outlet } from 'react-router-dom';
import { AdminFooter, AdminSidebar } from '../components';
const { Content } = Layout;

const AdminLayout = () => {
    return (
        <Layout>
            <Content>
                <Row>
                    <Col span={4}>
                        <AdminSidebar />
                    </Col>
                    <Col span={20}>
                        <Outlet />
                    </Col>
                </Row>
            </Content>
            <AdminFooter />
        </Layout>
    );
};

export default AdminLayout;