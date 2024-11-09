import React, { useState, useEffect } from 'react';
import { Categories, Product, TopCategories, Pagination } from '../components/index';
import { Layout, Space, Spin, Alert } from 'antd';
import PropTypes from 'prop-types';
import axios from '../utils/axiosConfig';
import './ProductPage.css';

const { Content } = Layout;

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [error, setError] = useState(null);
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);

                console.log(selectedCategory);

                const endpoint = selectedCategory
                    ? `/products?id=${selectedCategory}`
                    : '/products';
                const response = await axios.get(endpoint);
                const transformedProducts = response.data.map(product => ({
                    ...product,
                }));
                setProducts(transformedProducts);
            } catch (error) {
                setError('Failed to fetch products. Please try again later.');
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
        setCurrentPage(1);
    }, [selectedCategory]);

    const startIndex = (currentPage - 1) * pageSize;
    const productsToShow = products.slice(startIndex, startIndex + pageSize);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCategorySelect = (category) => {


        setSelectedCategory(category);
    };

    return (
        <Layout className='layout' style={{ backgroundColor: "white", marginTop: "24px" }}>
            <Categories
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
            />
            <Layout className="site-layout">
                <Content style={{ padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {error && (
                        <Alert
                            message="Error"
                            description={error}
                            type="error"
                            showIcon
                        />
                    )}
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '50px' }}>
                            <Spin size="large" />
                        </div>
                    ) : (
                        <>
                            <Space wrap size={[16, 16]}>
                                {productsToShow.map(product => (
                                    <Product
                                        key={product.id}
                                        image={product.image}
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                    />
                                ))}
                            </Space>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <Pagination
                                    total={products.length}
                                    pageSize={pageSize}
                                    current={currentPage}
                                    onChange={handlePageChange}
                                    showSizeChanger={false}
                                />
                            </div>
                        </>
                    )}
                </Content>
            </Layout>
        </Layout>
    );
};


export default ProductPage;

