import React, { useState } from 'react';
import { Card } from 'antd';

import { MainProduct } from '../components/index'

const DetailProduct = () => {


    return (
        <Card style={{ width: '100%', padding: '32px', marginTop: '24px' }}>
            <MainProduct />
        </Card>
    );
}

export default DetailProduct;
