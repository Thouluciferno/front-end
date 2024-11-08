import React, { useState } from 'react';
import { Layout, Menu, Rate, Checkbox, Button, Row, Col } from 'antd';

import { Divider } from 'antd';
import './Categories.css';
import Category from './Item/Category';

const { Sider } = Layout;

const Categories = () => {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const handleCheckboxChange = (checkedValues) => {
        setSelectedCheckboxes(checkedValues);
    };

    const handleDeleteAll = () => {
        setSelectedCheckboxes([]);
    };

    return (
        <Sider className='categories' width={250} style={{ marginTop: "24px", backgroundColor: "white" }}>
            <Menu theme="light" mode="inline" defaultOpenKeys={['sub1']} >
                <Menu.SubMenu key="men" title="Men">
                    <Checkbox.Group style={{ width: '100%' }} value={selectedCheckboxes} onChange={handleCheckboxChange}>
                        <Menu.Item key="1">
                            <Checkbox value="T-Shirt">T-Shirt</Checkbox>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Checkbox value="Jeans">Jeans</Checkbox>
                        </Menu.Item>
                    </Checkbox.Group>
                </Menu.SubMenu>
                <Menu.SubMenu key="women" title="Women">
                    <Checkbox.Group style={{ width: '100%' }} value={selectedCheckboxes} onChange={handleCheckboxChange}>
                        <Menu.Item key="3">
                            <Checkbox value="Dress">Dress</Checkbox>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Checkbox value="Skirt">Skirt</Checkbox>
                        </Menu.Item>
                    </Checkbox.Group>
                </Menu.SubMenu>
                <Divider />
                <Menu.SubMenu key="brands" title="Brands">
                    <Checkbox.Group style={{ width: '100%' }} value={selectedCheckboxes} onChange={handleCheckboxChange}>
                        <Menu.Item key="5">
                            <Checkbox value="Nike">Nike</Checkbox>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Checkbox value="Adidas">Adidas</Checkbox>
                        </Menu.Item>
                    </Checkbox.Group>
                </Menu.SubMenu>
                <Divider />
                <Menu.SubMenu key="sizes" title="Sizes">
                    <Checkbox.Group style={{ width: '100%' }} value={selectedCheckboxes} onChange={handleCheckboxChange}>
                        <Menu.Item key="7">
                            <Checkbox value="Small">Small</Checkbox>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Checkbox value="Medium">Medium</Checkbox>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Checkbox value="Large">Large</Checkbox>
                        </Menu.Item>
                    </Checkbox.Group>
                </Menu.SubMenu>
                <Divider />
                <Menu.Item key="rating">
                    <span>Rating</span>
                    <Rate style={{ fontSize: 32, marginLeft: 8 }} character={<span style={{ fontSize: 24 }}>★</span>} allowHalf defaultValue={2.5} />
                </Menu.Item>
                <Divider />
                <Row justify="center" style={{ marginBottom: 16 }}>
                    <Col>
                        <Button type="primary" onClick={handleDeleteAll} >Delete All</Button>
                    </Col>
                </Row>
            </Menu>
        </Sider>
    );
}

export default Categories;

