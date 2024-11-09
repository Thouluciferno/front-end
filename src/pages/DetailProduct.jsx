// src/pages/DetailProduct.js
import React, { useEffect, useState } from 'react';
import { Card, Spin, Alert } from 'antd';
import { useParams } from 'react-router-dom';

import { MainProduct } from '../components';
import productApi from '../services/api/productApi';

const DetailProduct = () => {
    const { id: productId } = useParams(); // Lấy productId từ URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await productApi.getById(productId);

                console.log(data);

                setProduct(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (productId) fetchProduct();
    }, [productId]);

    if (loading) return <Spin size="large" />;
    if (error) return <Alert message="Error" description={error} type="error" />;

    return (
        <Card style={{ width: '100%', padding: '32px', marginTop: '24px' }}>
            {product ? <MainProduct product={product} /> : 'No product found'}
        </Card>
    );
};

export default DetailProduct;
