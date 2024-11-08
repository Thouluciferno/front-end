import React from 'react';
import { Card, Button, InputNumber, Image, Typography, Checkbox, Row, Col } from 'antd';
import "./Cart.css";

const { Text } = Typography;

const Cart = ({ item, onUpdateQuantity, onDelete }) => {
    return (
        <Card className="cart-item">
            <Row gutter={[16, 16]} align="middle">
                <Col xs={24} sm={4} md={3} lg={2}>
                    <Checkbox checked={item.checked} />
                </Col>
                <Col xs={24} sm={8} md={6} lg={4}>
                    <Image src={item.image} alt={item.name} />
                </Col>
                <Col xs={24} sm={8} md={8} lg={6}>
                    <Text>{item.name}</Text>
                </Col>
                <Col xs={24} sm={4} md={3} lg={4}>
                    <Text>${item.price}</Text>
                </Col>
                <Col xs={24} sm={8} md={6} lg={4}>
                    <InputNumber min={1} defaultValue={item.quantity} onChange={(value) => onUpdateQuantity(item.key, value)} />
                </Col>
                <Col xs={24} sm={4} md={3} lg={4}>
                    <Button type="primary" onClick={() => onDelete(item.key)}>Delete</Button>
                </Col>
            </Row>
        </Card>
    );
};

export default Cart;
