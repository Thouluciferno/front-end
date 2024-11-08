import React, { useEffect, useRef, useState } from 'react';
import { Card, Select, Flex, List, Avatar } from 'antd';

// Chart
import Chart from 'chart.js/auto';

const { Option } = Select;

const BarChart = () => {
    const chartRef = useRef();
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Sample data for the chart (assuming data for the selected year)
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Sample Data',
                data: [12, 19, 3, 5, 2, 3, 10, 15, 8, 6, 4, 9],
                backgroundColor: 'rgba(54, 162, 235, 0.9)', // Blue color with 20% opacity
                borderColor: 'rgba(54, 162, 235, 1)', // Blue color
                borderWidth: 1
            }]
        };

        // Chart configuration
        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                plugins: {
                    legend: {
                        display: false // Hide legend
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        };

        // Render the chart
        const chart = new Chart(chartRef.current, config);

        // Clean up function
        return () => chart.destroy();
    }, [selectedYear]);

    const handleYearChange = (value) => {
        setSelectedYear(value);
    };

    const products = [
        { id: 1, title: 'Product 1', image: 'https://via.placeholder.com/150', orders: 20 },
        { id: 2, title: 'Product 2', image: 'https://via.placeholder.com/150', orders: 15 },
        { id: 3, title: 'Product 3', image: 'https://via.placeholder.com/150', orders: 25 },
        // Add more products as needed
    ];

    return (
        <>
            <Card title="Total Revenue" style={{ width: '100%', marginBottom: '20px' }}>
                <Flex justify="space-between" vertical style={{ height: '600px' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <span>Select Year: </span>
                        <Select defaultValue={selectedYear} style={{ width: 120 }} onChange={handleYearChange}>
                            {[2022, 2023, 2024].map(year => (
                                <Option key={year} value={year}>{year}</Option>
                            ))}
                        </Select>
                    </div>
                    <div style={{ flex: 1 }}>
                        <canvas ref={chartRef}></canvas>
                    </div>
                </Flex>
            </Card>
        </>
    );
}

export default BarChart;
