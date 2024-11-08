import React from 'react'
import { Row, Col, Card } from 'antd';

import BarChart from './Statistics/BarChart'
import PieChart from './Statistics/PieChart'
import LineChart from './Statistics/LineChart';


const DashboardStatistic = () => {
    return (
        <div>
            <div>
                <BarChart />
            </div>
            <div>
                <PieChart />
            </div>
            <div>
                <LineChart />
            </div>
        </div>
    )
}

export default DashboardStatistic