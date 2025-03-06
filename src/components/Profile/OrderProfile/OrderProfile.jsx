import React from 'react';
import { Card, Image, Typography, Space } from 'antd';
import image from "../../../assets/chair/Image.png";

const { Meta } = Card;
const { Text, Paragraph } = Typography;

const OrderProfile = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <Card
                    key={index}
                    style={{ width: "100%", marginBottom: "16px" }}
                // actions={[
                //     <Button icon={<ShoppingCartOutlined />} type='primary' style={{ backgroundColor: 'orange' }}>
                //         Buy Again
                //     </Button>,
                // ]}
                >
                    <Space direction="horizontal" align="start">
                        <Image alt={item.title} src={image} width={120} />
                        <div>
                            <Meta
                                title={item.title}
                                description={
                                    <>
                                        <Paragraph>{item.text}</Paragraph>
                                        <Text type="primary" style={{ fontWeight: "bold", fontSize: "20px" }}>x{item.quantity}</Text>
                                    </>
                                }
                            />
                        </div>
                    </Space>
                    <Text key="total" style={{ color: "orange", fontWeight: "bold", float: "right", fontSize: "20px" }}> đ{item.price * item.quantity}</Text>
                </Card>
            ))}
        </div>
    );
}

export default OrderProfile;
