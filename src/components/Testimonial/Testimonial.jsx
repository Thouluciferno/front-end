import React from 'react';
import { Carousel, Row, Col } from 'antd';
import Item from './Item/Item';

import avatar from "../../assets/avatar/avatar.png"
import avatar1 from "../../assets/avatar/avatar1.png"

const Testimonial = () => {
    return (
        <Carousel autoplay className='testimonial-carousel' dots={false} autoplaySpeed={3000} style={{ padding: "24px" }}>
            <div className="slide">
                <Row justify="space-between" gutter={16}>
                    <Col xs={24} sm={12}>
                        <Item
                            description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
                            sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam 
                            dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus.
                            In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“"
                            avatar={avatar}
                            title="John Doe"
                            career="Web Developer"
                        />
                    </Col>
                    <Col xs={24} sm={12}>
                        <Item
                            description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices 
                            diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus
                            . In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“"
                            avatar={avatar1}
                            title="John Doe"
                            career="Web Developer"
                        />
                    </Col>
                </Row>
            </div>
            <div className='slide'>
                <Row justify="space-between" gutter={16}>
                    <Col xs={24} sm={12}>
                        <Item
                            description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet
                            mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere.
                            Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“"
                            avatar={avatar}
                            title="John Doe"
                            career="frontend Developer"
                        />
                    </Col>
                    <Col xs={24} sm={12}>
                        <Item
                            description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit 
                            amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. 
                            Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“"
                            avatar={avatar1}
                            title="John Doe"
                            career="backend Developer"
                        />
                    </Col>
                </Row>
            </div>
        </Carousel>
    );
}

export default Testimonial;
