import React from 'react';
import { Card, Image, Typography, Checkbox, Row, Col } from 'antd';

const { Text } = Typography;
const ProductCard = ({ item }) => {

    return (
        <Card className="cart-item">
            <Row gutter={[16, 16]} align="middle">
                <Col xs={24} sm={12} md={6} lg={4}>
                    <Image src={item.image} alt={item.name} />
                </Col>
                <Col xs={24} sm={8} md={8} lg={6}>
                    <Text>{item.name}</Text>
                </Col>
                <Col xs={24} sm={4} md={3} lg={4}>
                    <Text>${item.price}</Text>
                </Col>
                {/* total price will be calculated  */}
                <Col xs={24} sm={8} md={6} lg={4}>
                    <Text
                        style={{ color: "orange", fontWeight: "bold", float: "right" }}
                    >${item.price * item.quantity}</Text>

                </Col>
            </Row>
        </Card>
    )
}

export default ProductCard