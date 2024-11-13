import React from 'react';
import { Flex, Card, Button, Image, message } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';
import "./Product.css";

import cartApi from "../services/api/cartApi";

import { Typography } from 'antd';

const { Title } = Typography;



const Product = (prop) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/productDetail/${prop.id}`);
    };

    const handleButtonClick = async () => {
        try {

            const response = await cartApi.addToCart(prop.id, 1);

            console.log(response);
            message.success('Product added to cart successfully!');
        } catch (error) {
            console.error('Failed to add product to cart:', error);
            message.error('Failed to add product to cart. Please try again.');
        }
    };

    return (
        <Card
            hoverable
            cover={
                <Image
                    alt={prop.name}
                    src={require(`../assets/${prop.image}`)}
                    preview={false}
                    style={{ width: '250px', height: '250px', objectFit: 'contain' }}
                    onClick={handleCardClick}
                />
            }
        >
            <Flex direction="horizontal" justify="space-between"  >
                <Flex vertical justify="space-between" >
                    <Title
                        level={5}
                        style={{ margin: 0, transition: 'color 0.3s', color: "#007580", cursor: "pointer", width: "180px" }}
                        className="hoverable-title"

                    >
                        {prop.name}
                    </Title>
                    <Title
                        level={5}
                        style={{ margin: 0, padding: 0, transition: 'color 0.3s' }}

                    >
                        ${prop.price}
                    </Title>

                </Flex>
                <Button
                    type="primary"
                    icon={<ShoppingCartOutlined />}
                    onClick={handleButtonClick}
                    key={prop.id}
                />
            </Flex>
        </Card>
    );
};

export default Product;
