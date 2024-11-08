import React from 'react'
import "./Tab.css"
import { Tabs } from 'antd';

const Tab = () => {
    // create array All, Newest , Trending , Best sellers, Top rated
    const Array = ["All", "Newest", "Trending", "Best sellers", "Top rated"]
    return (
        <Tabs
            defaultActiveKey="1"
            centered
            items={Array.map((item) => {
                return {
                    label: item,
                    key: item,
                };
            })}
        />
    )
}

export default Tab