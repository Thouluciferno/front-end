import React from 'react'
import { Button, Image, InputNumber, Space, Typography, message, Flex } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import CurrentAddress from './CurrentAddress';

import cartApi from '../../services/api/cartApi';

const { Title } = Typography;



const MainProduct = ({ product }) => {


    console.log(product);

    // add to cart and show message
    const handleAddToCart = async () => {
        try {
            await cartApi.addToCart(product.id, 1);
            message.success('Product added to cart successfully!');
        } catch (error) {
            console.error('Failed to add product to cart:', error);
            message.error('Failed to add product to cart. Please try again.');
        }
    };


    return (
        <Space align="start" size={32}>
            {/* Hiển thị hình ảnh sản phẩm */}
            <Image
                alt={product.name}
                src={require(`../../assets/${product.image}`)}
                style={{ width: '400px', height: '400px', objectFit: 'contain' }}
            />

            {/* Thông tin sản phẩm */}
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                {/* Tên sản phẩm */}
                <Title level={4} style={{ fontWeight: 'bold' }}>{product.name}</Title>

                {/* Giá sản phẩm với nền màu */}
                <Title
                    level={2}
                    style={{
                        fontWeight: 'bold',
                        color: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.05)',
                        padding: '8px',
                        borderRadius: '4px'
                    }}
                >
                    ₫ {product.price}
                </Title>

                {/* Số lượng sản phẩm */}
                <Flex align="center" gap={8}>
                    <Title level={5} style={{ fontWeight: 'bold', height: "48px" }} >Số lượng: </Title>
                    <InputNumber min={1} defaultValue={1} style={{ width: '168px' }} />
                </Flex>

                {/* Địa chỉ hiện tại */}
                <CurrentAddress />

                {/* Nút Thêm Vào Giỏ Hàng và Mua Ngay */}
                <Space style={{ marginTop: '16px' }}>
                    <Button
                        type="primary"
                        style={{ width: '168px', height: '48px' }}
                        icon={<ShoppingCartOutlined />}
                        onClick={handleAddToCart}
                    >
                        Thêm Vào Giỏ Hàng
                    </Button>
                    <Button
                        style={{
                            width: '168px',
                            height: '48px',
                            backgroundColor: 'red',
                            color: 'white',
                            border: 'none'
                        }}
                    >
                        Mua Ngay
                    </Button>
                </Space>
            </div>
        </Space>
    )
}

export default MainProduct