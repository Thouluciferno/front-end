import React, { useState, useEffect } from 'react';
import { Typography, Card, Button, Space, Checkbox, Flex } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import "./CartPage.css";

import { Cart, TopCategories } from "../components/index";

import cartApi from '../services/api/cartApi';
import { Heading } from '../layouts/index';

const { Title, Text } = Typography;

const CartPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate


    // Dummy data for the cart items
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await cartApi.myCart();
                const cartItemsData = response.data;
                console.log("Cart Items:", cartItemsData);
                console.log("Cart product:", cartItemsData[0].product);
                setCartItems(cartItemsData);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, []);

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
        console.log("Total Amount:", totalAmount);

        navigate('/checkout');


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
