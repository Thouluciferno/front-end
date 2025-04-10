import React, { useEffect, useRef, useState } from 'react';
import { Card, List, Avatar, Pagination } from 'antd';
import Chart from 'chart.js/auto';

const PieChart = ({ topProducts }) => {
    const chartRef = useRef();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4; // Limit of products shown per page

    useEffect(() => {
        // Extract product names for labels
        const data = {
            // labels with top products names 
            labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6', 'Product 7', 'Product 8'],
            datasets: [{
                label: 'Product Orders',
                data: [20, 15, 25, 25, 15, 10, 30, 20], // Sample data for orders
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                ]
            }]
        };

        // Chart configuration
        const config = {
            type: 'pie',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        };

        // Render the pie chart
        const chart = new Chart(chartRef.current, config);

        // Clean up function
        return () => chart.destroy();
    }, []);

    // Sample products data
    const products = [
        { id: 1, title: 'Prodfwafawsuct 111111', image: 'https://via.placeholder.com/150', orders: 20 },
        { id: 2, title: 'Product 2', image: 'https://via.placeholder.com/150', orders: 15 },
        { id: 3, title: 'Product 3', image: 'https://via.placeholder.com/150', orders: 25 },
        { id: 4, title: 'Product 4', image: 'https://via.placeholder.com/150', orders: 25 },
        { id: 5, title: 'Product 5', image: 'https://via.placeholder.com/150', orders: 15 },
        { id: 6, title: 'Product 6', image: 'https://via.placeholder.com/150', orders: 10 },
        { id: 7, title: 'Product 7', image: 'https://via.placeholder.com/150', orders: 30 },
        { id: 8, title: 'Product 8', image: 'https://via.placeholder.com/150', orders: 20 },
    ];

    // Paginate the products
    const paginatedProducts = products.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <Card title="Order Statistics" style={{ width: '100%', marginBottom: '20px' }}>
            <div style={{ display: 'flex' }}>
                {/* Display the pie chart */}
                <div style={{ width: '50%' }}>
                    <canvas ref={chartRef}></canvas>
                </div>
                {/* Display the list of products */}
                <div style={{ width: '50%', padding: '0 20px' }}>
                    <List
                        itemLayout="horizontal"
                        dataSource={paginatedProducts}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.image} />}
                                    title={<a href="#">{item.title}</a>}
                                    description={`Number of Orders Sold: ${item.orders}`}
                                />
                            </List.Item>
                        )}
                    />
                    {/* Add pagination */}
                    <Pagination
                        defaultCurrent={currentPage}
                        total={products.length}
                        pageSize={pageSize}
                        onChange={setCurrentPage}
                    />
                </div>
            </div>
        </Card>
    );
}

export default PieChart;
