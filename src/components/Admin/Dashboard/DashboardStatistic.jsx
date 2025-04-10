import React from 'react'
import { Row, Col, Card } from 'antd';

import BarChart from './Statistics/BarChart'
import PieChart from './Statistics/PieChart'
import LineChart from './Statistics/LineChart';


const DashboardStatistic = ({ topProducts }) => {
    return (
        <div>
            <div>
                <BarChart />
            </div>
            <div>
                <PieChart topProducts={topProducts} />
            </div>
            <div>
                <LineChart />
            </div>
        </div>
    )
}

export default DashboardStatistic