import React from 'react';
import { Flex, Card, Typography, Button, Image } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import "./Product.css";

const Product = (prop) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/productDetail/${prop.id}`);
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
                />
            }
            onClick={handleCardClick}
        >
            <Flex direction="horizontal" justify="space-between"  >
                <Flex vertical justify="space-between" >
                    <Typography.Title
                        level={5}
                        style={{ margin: 0, transition: 'color 0.3s' }}
                        className="hoverable-title"
                    >
                        {prop.name}
                    </Typography.Title>
                    <Typography.Text >
                        ${prop.price}
                    </Typography.Text>

                </Flex>
                <Button
                    type="primary"
                    icon={<ShoppingCartOutlined />}
                    onClick={(e) => e.stopPropagation()} // Prevents card click when button is clicked
                />
            </Flex>
        </Card>
    );
};

export default Product;
