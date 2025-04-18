import React, { useState, useEffect } from 'react';
import { Card, Button, Space, Typography, Divider, Row, Col } from 'antd';
import { Flex } from 'antd';
import { useLocation } from 'react-router-dom';
import { AddressCard, Checkout } from "../components/index";


import cartApi from '../services/api/cartApi';
import orderApi from '../services/api/orderApi';
import orderDetailApi from '../services/api/orderDetailApi';

const { Title, Text } = Typography;

const CheckoutPage = () => {

    const location = useLocation();

    const { saveItemsToggle } = location.state || { saveItemsToggle: [] };

    console.log(saveItemsToggle); // This should log the data you passed from the previous page

    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchCartItems = async () => {
            if (!saveItemsToggle || saveItemsToggle.length === 0) return;

            try {
                const response = await cartApi.findAllById(saveItemsToggle);
                setCartItems(response.data);

                // Calculate total amount
                const total = response.data.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

                console.log("Total amount:", total);
                setTotalAmount(total);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, [saveItemsToggle]); // Ensure useEffect re-runs if `saveItemsToggle` changes


    const handleCheckout = async () => { // Add this function
        try {

            const order = {
                "paymentMethod": "Tiền Mặt",
            };


            const response = await orderApi.createOrder(order);


            const orderId = response.data.id; // Get the order ID from the response


            console.log("Order ID:", orderId);

            const orderDetails = cartItems.map((item) => ({
                "orderId": orderId,
                "productId": item.product.id,
                "quantity": item.quantity,

            }));
            // delete cart items
            const deletePromises = saveItemsToggle.map((itemId) => cartApi.removeFromCart(itemId));
            await Promise.all(deletePromises); // Wait for all delete operations to complete
            console.log("Deleted cart items:", saveItemsToggle);


            const orderDetailPromises = orderDetails.map((orderDetail) =>
                orderDetailApi.createOrderDetail(orderDetail),
            );

            await Promise.all(orderDetailPromises); // Wait for all order details to be created

            console.log("Order details:", orderDetails);

            // delete cart





            window.location.href = "/profile/orders"; // Redirect to the orders page after successful checkout




        } catch (error) {
            console.error("Error creating order:", error);
        }
    }

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
                </Row   >
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

                    <Space justify="space-between" align="center" gap={16}>
                        <Text style={{ fontSize: "20px", fontWeight: "bold" }}>Tổng:
                            <Text strong
                                style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
                            > ₫{totalAmount}</Text>
                        </Text>

                        <Button type="primary"
                            onClick={handleCheckout}
                            style={{ width: "168px", height: "40px", backgroundColor: 'orange' }}>Thanh toán</Button>
                    </Space>
                </Flex>
            </Card>
        </div>
    );
}

export default CheckoutPage;
