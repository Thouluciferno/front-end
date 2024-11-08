import React, { useEffect, useRef, useState } from 'react';
import { Card, Select, Flex } from 'antd';
import Chart from 'chart.js/auto';

const { Option } = Select;

const LineChart = () => {
    const chartRef = useRef();
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Sample data for the chart (assuming data for the selected year)
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [2000, 2500, 3000, 2800, 3200, 3500, 3800, 4000, 4200, 4500, 4800, 5000],
                borderColor: 'rgba(75, 192, 192, 1)', // Turquoise color
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Turquoise color with opacity
                tension: 0.4
            }, {
                label: 'Expenses',
                data: [1500, 1800, 2000, 2100, 2200, 2300, 2500, 2600, 2800, 2900, 3000, 3100],
                borderColor: 'rgba(255, 99, 132, 1)', // Red color
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Red color with opacity
                tension: 0.4
            }, {
                label: 'Profit',
                data: [500, 700, 1000, 700, 1000, 1200, 1300, 1400, 1400, 1600, 1800, 1900],
                borderColor: 'rgba(54, 162, 235, 1)', // Blue color
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Blue color with opacity
                tension: 0.4
            }]
        };

        // Chart configuration
        const config = {
            type: 'line',
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
                        display: true,
                        position: 'bottom' // Display legend at the bottom
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

    return (
        <Card title="Monthly Statistics" style={{ width: '100%', marginBottom: '20px' }}>
            <Flex justify="space-between" vertical style={{ height: '100%' }}>
                <div style={{ marginBottom: '10px' }}>
                    <span>Select Year: </span>
                    <Select defaultValue={selectedYear} style={{ width: 120 }} onChange={handleYearChange}>
                        {[2022, 2023, 2024].map(year => (
                            <Option key={year} value={year}>{year}</Option>
                        ))}
                    </Select>
                </div>
                <div style={{ height: 500 }}>
                    <canvas ref={chartRef}></canvas>
                </div>
            </Flex>
        </Card>
    );
}

export default LineChart;
