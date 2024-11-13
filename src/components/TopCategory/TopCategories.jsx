import React, { useEffect, useState } from 'react';
import { Carousel, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import Category from './Category/Category';

import './TopCategories.css';

import productApi from '../../services/api/productApi';


const TopCategories = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [products2, setProducts2] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Lấy dữ liệu từ API
    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await productApi.top4();

            const response2 = await productApi.top4later();

            console.log(response);



            if (response.status === 200) {
                setProducts(response.data);
                setProducts2(response2.data);
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



    return (
        <Carousel autoplay className='categories-carousel' dots={false}>
            <div className="slide">
                <Flex className='categories' justify='space-between'>
                    {products.map((product) => (
                        <Category
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            quantity={product.quantity}
                        />
                    ))}
                </Flex>
            </div>
            <div className="slide">
                <Flex className='categories' justify='space-between'>
                    {products2.map((product) => (
                        <Category
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            quantity={product.quantity}
                        />
                    ))}
                </Flex>
            </div>
        </Carousel>
    );
};

export default TopCategories;