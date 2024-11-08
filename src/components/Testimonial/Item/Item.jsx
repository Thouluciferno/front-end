import React from 'react';
import { Card, Avatar, Typography } from 'antd';

const { Meta } = Card;
const { Title, Text } = Typography;

const Item = (props) => {
    return (
        <Card style={{ width: "100%", marginTop: "24px", marginRight: "24px" }}>
            <Meta
                description={
                    <Text type="secondary">{props.description}</Text>
                }
            />
            <Meta
                style={{ display: "flex", alignItems: "center", marginTop: "12px" }}
                avatar={<Avatar src={props.avatar} />}
                title={<Title level={5} style={{ margin: 0 }} >{props.title}</Title>}
                description={<Text type="secondary">{props.career}</Text>}
            />
        </Card>
    );
}

export default Item;