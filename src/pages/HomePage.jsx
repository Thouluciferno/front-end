import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Hero, Background, TrackerRight, TrackerLeft } from '../components/Header';
import { Feature, Products, TopCategories, Tab, Testimonial } from '../components/index'
import { Heading, Footer } from '../layouts/index';
import "./HomePage.css";
const { Content } = Layout;

const HomePage = () => {
    return (
        <div>
            <Layout className='layout'>
                <Content>
                    <Row justify="space-between" align="middle" className='row'>
                        <Col xs={0} sm={2} lg={2} className="column">
                            <TrackerLeft />
                        </Col>
                        <Col xs={24} sm={8} lg={8}>
                            <Hero />
                        </Col>
                        <Col xs={24} sm={12} lg={12}>
                            <Background />
                        </Col>
                        <Col xs={0} sm={2} lg={2} className="column">
                            <TrackerRight />
                        </Col>
                    </Row>
                    <Feature />
                    <Heading title="Featured Products" disable={false} />
                    <Products />
                    <Heading title="Top categories" disable={false} />
                    <TopCategories />
                    <Heading title="Our Products" disable={true} />
                    <Tab />
                    <Products />
                    <Products />
                    <Heading title="What client says about us" disable={false} />
                    <Testimonial />
                </Content>
            </Layout>
        </div>
    )
}

export default HomePage;