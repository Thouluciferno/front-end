import React, { useState, useEffect } from 'react';
import { Layout, Menu, Rate, Checkbox, Button, Row, Col } from 'antd';
import { Divider } from 'antd';
import './Categories.css';
import axios from '../../utils/axiosConfig';
import PropTypes from 'prop-types';

const { Sider } = Layout;

const Categories = ({ onCategorySelect, onRatingSelect }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('/categories');
                // Filter only active categories
                const activeCategories = response.data.filter(category => category.status);
                setCategories(activeCategories);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    console.log(categories);

    const handleRatingChange = (value) => {
    };

    const handleClearAll = () => {

    };

    return (
        <Sider className='categories' width={250} style={{ marginTop: "24px", backgroundColor: "white" }}>
            <Menu theme="light" mode="inline" defaultOpenKeys={['sub1']} >
                <Menu.SubMenu key="categories" title="Categories">
                    <Checkbox.Group
                        style={{ width: '100%' }}
                    >
                        {categories.map(category => (
                            <Menu.Item key={category.id}>
                                <Checkbox value={category.id}>
                                    {category.name}
                                </Checkbox>
                            </Menu.Item>
                        ))}
                    </Checkbox.Group>
                </Menu.SubMenu>

                <Divider />
                <Menu.Item key="rating">
                    <span>Rating</span>
                    <Rate
                        style={{ fontSize: 32, marginLeft: 8 }}
                        character={<span style={{ fontSize: 24 }}>★</span>}
                        allowHalf
                        onChange={handleRatingChange}
                    />
                </Menu.Item>

                <Divider />
                <Row justify="center" style={{ marginBottom: 16 }}>
                    <Col>
                        <Button type="primary" onClick={handleClearAll}>
                            Clear All
                        </Button>
                    </Col>
                </Row>
            </Menu>
        </Sider>
    );
}


export default Categories;

