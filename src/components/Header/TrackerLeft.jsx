import React from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import './Tracker.css';

const TrackerLeft = () => {
    return (
        <div className="tracker">
            <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} size="medium" />
        </div>
    );
};

export default TrackerLeft;