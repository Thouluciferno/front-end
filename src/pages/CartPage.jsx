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


    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await cartApi.myCart();

                const cartItemsData = response.data;

                setCartItems(cartItemsData);

                console.log("Cart Items:", cartItemsData);

                // Calculate total amount

            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, []);

    // Function to update quantity
    const onUpdateQuantity = (key, value) => {

        //    addToCart
        cartApi.updateQuantity(key, value)
            .then((response) => {
                console.log(response);
                setCartItems(prevItems => prevItems.map(item => item.id === key ? { ...item, quantity: value } : item));
            })
            .catch((error) => {
                console.error(error);
            });



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

        setTotalAmount(checked ? cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0) : 0);
    };


    // Function to proceed to payment
    const handlePayment = () => {
        console.log("Total Amount:", totalAmount);

        navigate('/checkout');


    };

    const onToggleSelect = (key, checked) => {
        console.log(key, checked);

        setCartItems(prevItems => {
            const updatedItems = prevItems.map(item =>
                item.id === key ? { ...item, checked } : item
            );

            // Calculate total amount based on selected items
            const newTotalAmount = updatedItems.reduce((total, item) => total + (item.checked ? item.product.price * item.quantity : 0), 0);
            setTotalAmount(newTotalAmount);

            return updatedItems;
        });
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
                    <Card key={item.id} className="cart-item-card">
                        <Cart
                            item={item}
                            onUpdateQuantity={onUpdateQuantity}
                            onDelete={() => onDelete(item.id)}
                            onToggleSelect={onToggleSelect}
                        />
                    </Card>
                ))}
            </Flex>

            <Card className="cart-total-card" style={{ margin: '24px 0', padding: '24px' }}>
                <Flex justify="space-between" align="center" >
                    <Checkbox onChange={handleSelectAll} >
                        Select All
                    </Checkbox>
                    <Space>
                        <Flex justify="space-between" align="center" gap={16}>
                            <Text style={{ fontSize: "20px", fontWeight: "bold" }}>Tổng:</Text>
                            <Text strong
                                style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
                            > ₫{totalAmount}</Text>

                            <Button type="primary" onClick={handlePayment} style={{ width: "168px", height: "40px", backgroundColor: 'orange' }}>Thanh Toán</Button>
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
