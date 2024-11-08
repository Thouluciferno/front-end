import React from 'react';
import { Flex } from 'antd';
import { Button, Typography } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import './Heading.css';

const { Title } = Typography;

const Heading = (props) => {
    return (
        <Flex className='heading' direction="column">
            <Flex className={`heading-box ${props.disable ? 'centered' : ''}`}>
                <Title level={3} style={{ margin: "0", fontWeight: 600 }}>{props.title}</Title>
            </Flex>
            {!props.disable && (
                <Flex className='heading-box'>
                    <Button type="primary" icon={<ArrowLeftOutlined />} style={{
                        marginRight: "10px",
                        backgroundColor: "green",
                    }}
                        shape='circle'
                    />
                    <Button type="primary" icon={<ArrowRightOutlined />}
                        shape='circle'
                        style={{ backgroundColor: "green" }}
                    />
                </Flex>
            )}
        </Flex>
    );
};

export default Heading;
