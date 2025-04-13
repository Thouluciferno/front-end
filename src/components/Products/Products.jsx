import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Space, Typography, Divider, Row, Col, Spin } from 'antd';
import Product from './Product/Product';

import productApi from '../../services/api/productApi';

const { Title, Text } = Typography;

const Products = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Lấy dữ liệu từ API
    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await productApi.top4();

            if (response.status === 200) {
                setProducts(response.data);
            }

        } catch (error) {
            setError('Failed to fetch products. Please try again later.');
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleProductClick = (productId) => {
        navigate(`/ProductDetail/${productId}`);
    };

    // Hiển thị loading spinner nếu đang tải dữ liệu
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Spin size="large" />
            </div>
        );
    }

    // Hiển thị thông báo lỗi nếu có lỗi
    if (error) {
        return <div style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>{error}</div>;
    }


    // Hiển thị tất cả các sản phẩm
    return (
        <Row justify="center" gutter={[16, 16]} className="products">
            {products.map((product) => (
                <Col
                    key={product.id}
                    xs={24}
                    sm={12}
                    md={6}
                    onClick={() => handleProductClick(product.id)}
                    style={{ cursor: 'pointer' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Product
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            id={product.id}
                        />
                    </div>
                </Col>
            ))}
        </Row>
    );
};

export default Products;
