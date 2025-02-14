import React from 'react';
import { Card, Image, Typography, Row, Col } from 'antd';
import "./Cart.css";

const { Text } = Typography;

const Checkout = ({ item }) => {

    return (
        <Card className="cart-item" >

            <Row gutter={[16, 16]} align="middle">
                <Col xs={24} sm={8} md={6} lg={4}>
                    <Image
                        src={require(`../assets/${item.product.image}`)}
                        alt={item.name}
                        style={{ objectFit: 'contain', width: '100px', height: '100px' }}
                    />
                </Col>
                <Col xs={24} sm={8} md={8} lg={6}>
                    <Text
                        strong
                    >{item.product.name}</Text>
                </Col>
                <Col xs={24} sm={4} md={3} lg={4}>
                    <Text
                        strong
                    >₫ {item.product.price}</Text>
                </Col>
                <Col xs={24} sm={4} md={3} lg={4}>
                    <Text
                        strong
                    >{item.quantity}</Text>
                </Col>
                <Col xs={24} sm={8} md={6} lg={4}>
                    <Text
                        style={{ float: "right" }}
                        strong
                    >₫ {item.product.price * item.quantity}</Text>
                </Col>
            </Row>
        </Card>
    );
};

export default Checkout;
