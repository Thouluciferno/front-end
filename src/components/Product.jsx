import React from 'react';
import { Flex, Card, Typography, Button, Image } from 'antd'; // Import Typography
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // Add this import
import "./Product.css";



const Product = ({ id, name, price }) => {
    const navigate = useNavigate(); // Add this hook

    const handleCardClick = () => {
        navigate(`/products/${id}`); // Add navigation handler
    };

    return (
        <Card
            hoverable
            style={{ width: 260 }}
            cover={<Image alt="example"
                src={`./assets/`}
            />}
            onClick={handleCardClick} // Add onClick handler
        >
            <Flex direction="column" justify='space-between'>
                <Flex vertical justify="space-between" style={{ marginBottom: '8px' }}>
                    <Typography.Title
                        level={5}
                        style={{ margin: 0, transition: 'color 0.3s' }}
                        className="hoverable-title"
                    >
                        {name}
                    </Typography.Title>
                    <Typography.Text style={{ margin: 0 }}>{price}</Typography.Text>
                </Flex>
                <Button
                    icon={<ShoppingCartOutlined />} />
            </Flex>
        </Card>
    )
}

export default Product;