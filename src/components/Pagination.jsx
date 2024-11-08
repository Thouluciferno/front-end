import React from 'react';
import { Pagination as AntPagination, Button } from 'antd'; // Import Button from Ant Design

const Pagination = ({ total, pageSize, current, onChange }) => {
    return (
        <AntPagination
            total={total}
            pageSize={pageSize}
            current={current}
            onChange={onChange}
            style={{ marginTop: '24px' }}
        />
    );
}

export default Pagination;
