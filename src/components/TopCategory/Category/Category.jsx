import React from 'react';
import { Card, Typography, Image } from 'antd'; // Import Typography
import { Flex } from 'antd';
import './Category.css';

const Category = (props) => {
    return (
        <Card
            hoverable
            style={{ width: 320, marginTop: "24px", position: "relative" }}
            cover={<Image
                alt={props.name}
                src={require(`../../../assets/${props.image}`)}
                preview={false}
                style={{ objectFit: 'contain', height: '200px' }}
            />}
        >
            <div className="category-overlay">
                <div className="overlay-content">
                    <Flex vertical justify="space-between" style={{ marginBottom: '8px' }}>
                        <Typography.Title
                            level={5}
                            style={{ margin: 0, transition: 'color 0.3s', color: "white" }}
                            className="hoverable-title"
                        >
                            {props.name}
                        </Typography.Title>
                        <Typography.Text style={{ margin: 0, color: "white" }}>{props.quantity} Products</Typography.Text>
                    </Flex>
                </div>
            </div>
        </Card>
    )
}

export default Category;