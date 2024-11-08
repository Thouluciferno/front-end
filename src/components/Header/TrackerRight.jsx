import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './Tracker.css';

const TrackerRight = () => {
    return (
        <div className="tracker">
            <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} size="medium" />
        </div>
    );
};

export default TrackerRight;