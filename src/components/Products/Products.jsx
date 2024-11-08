import React from 'react';
import { Row } from 'antd';
import { Flex } from 'antd';
import Product from './Product/Product';
import Image from '../../assets/chair/Image.png';
import Image1 from '../../assets/chair/Image1.png';
import Image2 from '../../assets/chair/Image2.png';
import Image3 from '../../assets/chair/Image3.png';

const Products = () => {
    return (
        <Row justify="space-around" gutter={[16, 16]} className="products">
            <Flex justify="center">
                <Product image={Image} />
            </Flex>
            <Flex justify="center">
                <Product image={Image1} />
            </Flex>
            <Flex justify="center">
                <Product image={Image2} />
            </Flex>
            <Flex justify="center">
                <Product image={Image3} />
            </Flex>
        </Row>
    );
}

export default Products;
