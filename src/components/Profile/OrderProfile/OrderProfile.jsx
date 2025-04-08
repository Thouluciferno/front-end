import React from 'react';
import { Card, Image, Typography, Space, Button } from 'antd';


const { Meta } = Card;
const { Text, Paragraph } = Typography;

const OrderProfile = ({ items }) => {

    console.log("items",
        items.map((item) => {
            return item.product.image
        })

    );

    return (
        <div>
            {items.map((item, index) => (
                <Card
                    key={index}
                    style={{ width: "100%", marginBottom: "16px" }}

                >
                    <Space direction="horizontal" align="start">
                        <Image alt={item.name}
                            // set src assets to public folder and use relative path
                            src={`../assets/${item.product.image}`}
                            width={120}
                            height={120}
                            style={{ borderRadius: "8px", objectFit: "cover" }}
                        />
                        <div>
                            <Meta
                                title={item.name}
                                description={
                                    <>
                                        <Paragraph >{item.product.name}</Paragraph>
                                        <Text type="primary" style={{ fontWeight: "bold", fontSize: "20px" }}>x{item.quantity}</Text>
                                    </>
                                }
                            />
                        </div>
                    </Space>
                    <Text key="total" style={{ color: "orange", fontWeight: "bold", float: "right", fontSize: "20px" }}>
                        đ {item.product.price * item.quantity}
                    </Text>

                </Card>

            ))}
        </div>
    );
}

export default OrderProfile;
