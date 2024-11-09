import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row } from 'antd';
import { Flex } from 'antd';
import Product from './Product/Product';
import Image from '../../assets/chair/Image.png';
import Image1 from '../../assets/chair/Image1.png';
import Image2 from '../../assets/chair/Image2.png';
import Image3 from '../../assets/chair/Image3.png';

const Products = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const products = [
        { id: 1, image: Image },
        { id: 2, image: Image1 },
        { id: 3, image: Image2 },
        { id: 4, image: Image3 },
    ];

    const handleProductClick = (productId) => {
        navigate(`/products/${productId}`);
    };

    // If ID is provided, show single product
    if (id) {
        const product = products.find(p => p.id === parseInt(id));
        return (
            <Flex justify="center">
                <Product image={product?.image} />
            </Flex>
        );
    }

    // Otherwise show all products
    return (
        <Row justify="space-around" gutter={[16, 16]} className="products">
            {products.map(product => (
                <Flex key={product.id} justify="center" onClick={() => handleProductClick(product.id)}>
                    <Product image={product.image} />
                </Flex>
            ))}
        </Row>
    );
}

export default Products;
