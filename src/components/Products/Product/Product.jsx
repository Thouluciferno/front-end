import React from 'react';
import { Flex, Card, Typography, Button } from 'antd'; // Import Typography
import Image from '../../../assets/chair/Image.png';
import { ShoppingCartOutlined } from '@ant-design/icons';
import "./Product.css";

const Product = (prop) => {
    return (
        <Card
            hoverable
            style={{ width: 320, marginTop: "24px" }}
            cover={<img alt="example"
                // src={`../../../assets/Clothing/ao_khoac_nam/${prop.image}`}
                src={`../../../assets/Clothing/ao_khoac_nam/AKN1.jpg`}
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
                    <Typography.Text style={{ margin: 0 }}>{prop.price}</Typography.Text>
                </Flex>
                <Button
                    icon={<ShoppingCartOutlined />} />
            </Flex>
        </Card>
    )
}

export default Product;