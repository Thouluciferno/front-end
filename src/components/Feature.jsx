import React from 'react';
import { Typography, Card, Row, Col } from 'antd';

import { Image } from "antd";

import hours from "../assets/Feature/24-hours.png";
import box from "../assets/Feature/box.png";
import deliverytruck from "../assets/Feature/delivery-truck.png";
import shield from "../assets/Feature/shield.png";

import "./Feature.css";

const { Title, Text } = Typography;

const Feature = () => {
    return (
        <Row gutter={[16, 16]} className="feature" style={{ marginTop: "20px" }}>
            <Col xs={24} sm={12} md={6}>
                <Card>
                    <Row align="middle" gutter={[8, 8]}>
                        <Col>
                            <Image alt="hours" src={hours} preview={false} />
                        </Col>
                        <Col>
                            <div>
                                <Title level={5}>Feature Title 1</Title>
                                <Text>Feature Description 1</Text>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
                <Card>
                    <Row align="middle" gutter={[8, 8]}>
                        <Col>
                            <Image alt="box" src={box} preview={false} />
                        </Col>
                        <Col>
                            <div>
                                <Title level={5}>Feature Title 2</Title>
                                <Text>Feature Description 2</Text>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
                <Card>
                    <Row align="middle" gutter={[8, 8]}>
                        <Col>
                            <Image alt="delivery truck" src={deliverytruck} preview={false} />
                        </Col>
                        <Col>
                            <div>
                                <Title level={5}>Feature Title 3</Title>
                                <Text>Feature Description 3</Text>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
                <Card>
                    <Row align="middle" gutter={[8, 8]}>
                        <Col>
                            <Image alt="shield" src={shield} preview={false} />
                        </Col>
                        <Col>
                            <div>
                                <Title level={5}>Feature Title 4</Title>
                                <Text>Feature Description 4</Text>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    );
}

export default Feature;
