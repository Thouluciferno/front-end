import React, { useState, useEffect } from 'react';
import { Categories, Product, Pagination } from '../components/index';
import { Layout, Space, Spin, Alert } from 'antd';

import productApi from '../services/api/productApi';
import './ProductPage.css';

const { Content } = Layout;

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [error, setError] = useState(null);
    const pageSize = 12;
    const [currentPage, setCurrentPage] = useState(1);


    // fetch data rồi check filter dựa trên id của category
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await productApi.getAll();

                // console.log(response);

                const transformedProducts = response.data.map(product => ({
                    ...product,
                }));

                const filteredProducts = selectedCategories.length > 0
                    ? transformedProducts.filter(product => selectedCategories.includes(product.category.id))
                    : transformedProducts;

                setProducts(filteredProducts);
            } catch (error) {
                setError('Failed to fetch products. Please try again later.');
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
        setCurrentPage(1);
    }, [selectedCategories]);

    const startIndex = (currentPage - 1) * pageSize;
    const productsToShow = products.slice(startIndex, startIndex + pageSize);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCategorySelect = (categoryId) => {
        console.log('Category ID selected:', categoryId);
        setSelectedCategories(prevSelected => {
            if (prevSelected.includes(categoryId)) {
                // If already selected, remove it
                return prevSelected.filter(id => id !== categoryId);
            } else {
                // If not selected, add it
                return [...prevSelected, categoryId];
            }
        });
    };

    return (
        <Layout className='layout' style={{ backgroundColor: "white", marginTop: "24px" }}>
            <Categories onCategorySelect={handleCategorySelect} />
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

