import React, { useState, useEffect } from 'react';
import { Card, Button, Space, Typography, Divider, Row, Col } from 'antd';
import { Flex } from 'antd';
import { AddressCard, Checkout } from "../components/index";


import cartApi from '../services/api/cartApi';

const { Title, Text } = Typography;

const CheckoutPage = () => {

    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await cartApi.myCart();

                const cartItemsData = response.data;

                setCartItems(cartItemsData);

                console.log(cartItemsData);

                // Calculate total amount

            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, []);

    return (
        <div style={{ padding: '20px' }}>

            <Card style={{ marginBottom: '20px' }}>
                <AddressCard />
            </Card>

            <Card style={{ marginBottom: '20px' }}>
                {/* Header Row for Product Details */}
                <Row gutter={[16, 16]} align="middle" style={{ marginBottom: '32px' }}>
                    <Col xs={24} sm={8} md={8} lg={4}>
                        <Text strong>Sản phẩm</Text>
                    </Col>
                    <Col xs={24} sm={8} md={8} lg={6}>
                        <Text strong>Tên Sản Phẩm</Text>
                    </Col>
                    <Col xs={24} sm={4} md={3} lg={4}>
                        <Text strong>Đơn giá</Text>
                    </Col>
                    <Col xs={24} sm={4} md={3} lg={4}>
                        <Text strong>Số lượng</Text>
                    </Col>
                    <Col xs={24} sm={8} md={6} lg={4}>
                        <Text strong
                            style={{ float: "right" }}
                        >Thành tiền</Text>
                    </Col>
                </Row>
                {cartItems.map((item, index) => (
                    <Checkout key={index} item={item} />
                ))}
            </Card>
            <Card>
                <Flex justify="space-between" align="center" style={{ padding: '20px' }}>
                    <Space direction="vertical">
                        <Title level={4}>Phương thức thanh toán</Title>
                        <Divider />
                    </Space>

                    <Space direction="vertical">
                        <Button type="primary" style={{ width: "168px", height: "40px", backgroundColor: 'orange' }}>Thanh toán</Button>
                    </Space>
                </Flex>
            </Card>
        </div>
    );
}

export default CheckoutPage;
