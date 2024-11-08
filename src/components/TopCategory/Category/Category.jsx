import React from 'react';
import { Card, Typography, Button } from 'antd'; // Import Typography
import { Flex } from 'antd';
import './Category.css';

const Category = (props) => {
    return (
        <Card
            hoverable
            style={{ width: 320, marginTop: "24px", position: "relative" }}
            cover={<img alt="example" src={props.image} />}
        >
            <div className="category-overlay">
                <div className="overlay-content">
                    <Flex vertical justify="space-between" style={{ marginBottom: '8px' }}>
                        <Typography.Title
                            level={5}
                            style={{ margin: 0, transition: 'color 0.3s', color: "white" }}
                            className="hoverable-title"
                        >
                            Europe Street beat
                        </Typography.Title>
                        <Typography.Text style={{ margin: 0, color: "white" }}>3,584 Products</Typography.Text>
                    </Flex>
                </div>
            </div>
        </Card>
    )
}

export default Category;