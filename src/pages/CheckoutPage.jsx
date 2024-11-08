import React, { useState } from 'react';
import { Card, Button, Space, Typography, Divider } from 'antd';
import { Flex } from 'antd';
import { AddressCard, ProductCard } from "../components/index";

const { Title } = Typography;

const CheckoutPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            key: '1',
            name: 'The Best Product of All Time',
            image: 'https://via.placeholder.com/80', // Smaller image size
            price: 10,
            quantity: 2,
            total: 20,
            checked: false,
        },
        {
            key: '2',
            name: 'Knife of Destiny - 3D',
            image: 'https://via.placeholder.com/80', // Smaller image size
            price: 15,
            quantity: 1,
            total: 15,
            checked: false,
        },
    ]);

    // Calculate total price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.total, 0);

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>Checkout</Title>

            {/* Address card */}
            <Card style={{ marginBottom: '20px' }}>
                <AddressCard />
            </Card>

            {/* Product card */}
            <Card style={{ marginBottom: '20px' }}>
                {cartItems.map((item, index) => (
                    <ProductCard key={index} item={item} />
                ))}
            </Card>

            {/* Total price card with payment button */}
            <Card>
                <Flex justify="space-between" align="center" style={{ padding: '20px' }}>
                    {/* Left side content */}
                    <Space direction="vertical">
                        <Title level={4}>Phương thức thanh toán</Title>
                        <Divider />
                    </Space>
                    {/* Right side content */}
                    <Space direction="vertical">
                        <Title level={4}>Tổng thành tiền: ${totalPrice}</Title>
                        <Button type="primary" style={{ width: "168px", height: "40px", backgroundColor: 'orange' }}>Thanh toán</Button>
                    </Space>
                </Flex>
            </Card>
        </div>
    );
}

export default CheckoutPage;
