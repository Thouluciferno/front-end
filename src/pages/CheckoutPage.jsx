import React, { useState, useEffect } from 'react';
import { Card, Button, Space, Typography, Divider } from 'antd';
import { Flex } from 'antd';
import { AddressCard, Cart } from "../components/index";


import cartApi from '../services/api/cartApi';

const { Title } = Typography;

const CheckoutPage = () => {

    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await cartApi.myCart();

                const cartItemsData = response.data;

                setCartItems(cartItemsData);


                // Calculate total amount

            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, []);


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
        <div style={{ padding: '20px' }}>

            <Card style={{ marginBottom: '20px' }}>
                <AddressCard />
            </Card>

            <Card style={{ marginBottom: '20px' }}>
                {cartItems.map((item, index) => (
                    <Cart key={index} item={item} />
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
