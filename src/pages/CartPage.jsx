import React, { useState } from 'react';
import { Typography, Card, InputNumber, Button, Space, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory


import "./CartPage.css";

import { Flex } from 'antd';

import { Cart, Products, TopCategories } from "../components/index";
import { Heading } from '../layouts/index';


const { Title, Text } = Typography;

const CartPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate


    // Dummy data for the cart items
    const [cartItems, setCartItems] = useState([
        {
            key: '1',
            name: 'Product 1',
            image: 'https://via.placeholder.com/80', // Smaller image size
            price: 10,
            quantity: 2,
            total: 20,
            checked: false,
        },
        {
            key: '2',
            name: 'Product 2',
            image: 'https://via.placeholder.com/80', // Smaller image size
            price: 15,
            quantity: 1,
            total: 15,
            checked: false,
        },
    ]);

    // Function to update quantity
    const onUpdateQuantity = (key, value) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.key === key ? { ...item, quantity: value, total: value * item.price } : item
            )
        );
    };

    // Function to delete item
    const onDelete = (key) => {
        setCartItems(prevItems =>
            prevItems.filter(item => item.key !== key)
        );
    };

    // Function to handle "Select All" checkbox
    const handleSelectAll = (e) => {
        const checked = e.target.checked;
        setCartItems(prevItems =>
            prevItems.map(item => ({ ...item, checked }))
        );
    };

    // Calculate total amount
    const totalAmount = cartItems.reduce((acc, item) => (item.checked ? acc + item.total : acc), 0);

    // Function to proceed to payment
    const handlePayment = () => {
        // Your payment logic here
        console.log("Total Amount:", totalAmount);
        // For example, you can redirect to a payment page

        // Redirect to payment page
        navigate('/checkout'); // Assuming '/payment' is the route for the payment page


    };

    return (
        <div className="cart-page-container">
            <Title level={2}>Shopping Cart</Title>

            <Flex className="cart-items-container" vertical justify="space-between" gap={16} >
                <Card className="cart-item-card">
                    <Flex align="middle" justify="space-between">
                        <Checkbox onChange={handleSelectAll}>Select All</Checkbox>
                    </Flex>
                </Card>
                {cartItems.map(item => (
                    <Card key={item.key} className="cart-item-card">
                        <Cart item={item} onUpdateQuantity={onUpdateQuantity} onDelete={() => onDelete(item.key)} />
                    </Card>
                ))}
            </Flex>

            <Card className="cart-total-card" style={{ margin: '24px 0', padding: '24px' }}>
                <Flex justify="space-between" align="center" >
                    <Checkbox onChange={handleSelectAll} >
                        Select All
                    </Checkbox>
                    <Space>
                        <Flex justify="space-between" align="center" gap={32}>
                            <Text strong>Total: ${totalAmount}</Text>
                            <Button type="primary" onClick={handlePayment} style={{ width: "168px", height: "40px", backgroundColor: 'orange' }}>Payment</Button>
                        </Flex>
                    </Space>
                </Flex>
            </Card>
            <Heading title="You Maybe Favorite" disable={false} />
            <TopCategories />
        </div>
    );
};

export default CartPage;
