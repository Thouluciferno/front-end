import React from 'react';
import { Card, Button, InputNumber, Image, Typography, Checkbox, Row, Col } from 'antd';
import "./Cart.css";

const { Text } = Typography;

const Cart = ({ item, onUpdateQuantity, onDelete, onToggleSelect }) => {

    // Checkbox change handler
    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;

        onToggleSelect(item.id, checked);
    };

    return (
        <Card className="cart-item">
            <Row gutter={[16, 16]} align="middle">
                <Col xs={24} sm={4} md={3} lg={2}>
                    <Checkbox
                        checked={item.checked}
                        onChange={handleCheckboxChange}

                    />
                </Col>
                <Col xs={24} sm={8} md={6} lg={4}>
                    <Image
                        src={require(`../assets/${item.product.image}`)}
                        alt={item.name}
                        style={{ objectFit: 'contain', height: '100px' }}
                    />
                </Col>
                <Col xs={24} sm={8} md={8} lg={6}>
                    <Text>{item.name}</Text>
                </Col>
                <Col xs={24} sm={4} md={3} lg={4}>
                    <Text
                        style={{ color: "orange", fontWeight: "bold" }}
                    >₫ {item.product.price}</Text>
                </Col>
                <Col xs={24} sm={8} md={6} lg={4}>
                    <InputNumber
                        min={1}
                        defaultValue={item.quantity}
                        onChange={(value) => onUpdateQuantity(item.id, value)}
                    />
                </Col>
                <Col xs={24} sm={4} md={3} lg={4}>
                    <Button type="primary" onClick={() => onDelete(item.id)}>Delete</Button>
                </Col>
            </Row>
        </Card>
    );
};

export default Cart;
