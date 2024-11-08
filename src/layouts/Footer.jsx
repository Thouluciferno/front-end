import React from 'react';
import { Typography, Input, Button, Divider, Space, Row, Col, Flex } from 'antd'; // Import Flex from antd
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

import logo from '../assets/logo/Logo-Icon.png';

import './Footer.css';

const { Text, Title, Link, Paragraph } = Typography;

const Footer = () => {
    return (
        <div className="footer">
            <Row justify="space-between" gutter={[16, 16]}>
                <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <div className="footer-column">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src={logo} alt="Chairy Logo" style={{ width: '36px' }} />
                            <Title level={3}>Comforty</Title>
                        </div>
                        <Paragraph>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus </Paragraph>
                        <Space style={{ marginTop: '10px', gap: '10px' }}>
                            <Link href="#"><FacebookOutlined /></Link>
                            <Link href="#"><TwitterOutlined /></Link>
                            <Link href="#"><InstagramOutlined /></Link>
                        </Space>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <div className="footer-column">
                        <Title level={5} style={{ color: '#007580' }}>Category</Title>
                        <Divider />
                        <Flex direction="column"> {/* Set direction to column */}
                            <Paragraph style={{ fontSize: '16px', display: 'flex', gap: '10px', flexDirection: 'column' }} >
                                <Link href="#">Category 1</Link>
                                <Link href="#">Category 2</Link>
                                <Link href="#">Category 3</Link>
                            </Paragraph>
                        </Flex>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <div className="footer-column">
                        <Title level={5} style={{ color: '#007580' }}>Support</Title>
                        <Divider />
                        <Flex direction="column"> {/* Set direction to column */}
                            <Paragraph style={{ fontSize: '16px', display: 'flex', gap: '10px', flexDirection: 'column' }}>
                                <Link href="#">Contact Us</Link>
                                <Link href="#">FAQs</Link>
                                <Link href="#">Terms and Conditions</Link>
                            </Paragraph>
                        </Flex>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <div className="footer-column">
                        <Title level={5} style={{ color: '#007580' }}>Newsletter</Title>
                        <Divider />
                        <Flex direction="column" style={{ gap: '10px' }}>
                            <Input placeholder="Enter your email" />
                            <Button type="primary" style={{ color: 'white', backgroundColor: '#007580', letterSpacing: '0.3px' }}>Subscribe</Button>
                        </Flex>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</Text>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
