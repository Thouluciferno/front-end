import React from 'react';
import { Typography, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Hero = () => {
    return (
        <div>
            <Title level={5} style={{ fontWeight: '400', letterSpacing: '1px' }}>Welcome to Clothes</Title>
            <Title level={1} style={{ marginTop: 0, fontWeight: 'bold', width: 'fit-content' }}>Best Clothes Collection for you</Title>
            <Button type="primary" style={{ marginTop: 20, width: "168px", height: "40px", backgroundColor: '#1890ff' }}>Show Now <ArrowRightOutlined /></Button>
        </div >
    );
}

export default Hero;