import React from 'react';
import { Card, Button, Image, Typography, Space } from 'antd';
import image from "../../../assets/chair/Image.png";
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Text, Paragraph } = Typography;

const CartProfile = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <Card
                    key={index}
                    style={{ width: "100%", marginBottom: "16px" }}
                    actions={[
                        <Button icon={<ShoppingCartOutlined />} type='primary' style={{ backgroundColor: 'orange' }}>
                            Buy Again
                        </Button>,
                    ]}
                >
                    <Space direction="horizontal" align="start">
                        <Image alt={item.title} src={image} width={80} />
                        <div>
                            <Meta
                                title={item.title}
                                description={
                                    <>
                                        <Paragraph>{item.text}</Paragraph>
                                        <Text>x{item.quantity}</Text>
                                    </>
                                }
                            />
                        </div>
                    </Space>
                    <Text key="total" style={{ color: "orange", fontWeight: "bold", float: "right" }}>Total: ${item.price * item.quantity}</Text>
                </Card>
            ))}
        </div>
    );
}

export default CartProfile;
