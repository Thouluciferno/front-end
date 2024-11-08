import React, { useState } from 'react';
import { Categories, Product, TopCategories, Pagination } from '../components/index'; // Import Pagination component
import Image from "../assets/chair/Image.png";
import Image1 from "../assets/chair/Image1.png";
import Image2 from "../assets/chair/Image2.png";
import Image3 from "../assets/chair/Image3.png";
import { Layout, Space } from 'antd'; // Import Space component for gap
import './ProductPage.css';

const { Content } = Layout;

const ProductPage = () => {
    // Example array of product data
    const products = [
        { id: 1, image: Image },
        { id: 2, image: Image1 },
        { id: 3, image: Image2 },
        { id: 4, image: Image3 },
        { id: 5, image: Image3 },
        { id: 6, image: Image3 },
        { id: 7, image: Image3 },
    ];

    const pageSize = 12; // Number of products per page
    const [currentPage, setCurrentPage] = useState(1); // State to manage current page number

    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / pageSize);

    // Calculate the range of products to display based on the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalProducts);
    const productsToShow = products.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Layout className='layout' style={{ backgroundColor: "white", marginTop: "24px" }}>
            <Categories />
            <Layout className="site-layout" >
                <Content style={{ padding: '0 24px' }}>
                    <Space wrap size={[16, 16]}>
                        {productsToShow.map(product => (
                            <Product key={product.id} image={product.image} />
                        ))}
                    </Space>
                    <Pagination
                        total={totalProducts}
                        pageSize={pageSize}
                        current={currentPage}
                        onChange={handlePageChange}
                    />
                </Content>
            </Layout>
        </Layout>
    );
}

export default ProductPage;

