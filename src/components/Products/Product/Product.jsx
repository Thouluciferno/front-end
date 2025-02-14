import React from 'react';
import { Flex, Card, Typography, Button, Image } from 'antd'; // Import Typography
import { ShoppingCartOutlined } from '@ant-design/icons';
import "./Product.css";

const Product = (prop) => {
    return (
        <Card
            hoverable
            style={{ width: 320, marginTop: "24px" }}
            cover={<Image
                alt={prop.name}
                src={require(`../../../assets/${prop.image}`)}
                preview={false}
                style={{ objectFit: 'contain', height: '200px' }}
            />}
        >
            <Flex direction="column" justify='space-between'>
                <Flex vertical justify="space-between" style={{ marginBottom: '8px' }}>
                    <Typography.Title
                        level={5}
                        style={{ margin: 0, transition: 'color 0.3s' }}
                        className="hoverable-title"
                    >
                        {prop.name}
                    </Typography.Title>
                    <Typography.Text style={{ margin: 0 }}>${prop.price}</Typography.Text>
                </Flex>
                <Button
                    icon={<ShoppingCartOutlined />}
                    type="primary"
                    style={{ width: '20%' }}
                />
            </Flex>
        </Card>
    )
}

export default Product;