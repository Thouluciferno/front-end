import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Input, Form, Select, Upload, message, Space, Image } from 'antd';
import { UploadOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

const Products = ({ products, categories }) => {
    const [data, setData] = useState([
    ]);


    const [categoryOptions, setCategoryOptions] = useState([]); // Assuming categories are passed as props


    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isCreateMode, setIsCreateMode] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);


    // Show modal with selected product details for editing
    const handleRowClick = (record) => {
        console.log('Row clicked:', record);
        setSelectedProduct({ ...record });
        setIsCreateMode(false);
        setIsModalVisible(true);
        setIsDeleteModalVisible(false); // Ensure delete modal is closed when editing
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        setSelectedProduct(null);
    };

    const handleInputChange = (e, field) => {
        setSelectedProduct({
            ...selectedProduct,
            [field]: e.target.value,
        });
    };

    const handleCategoryChange = (value) => {
        console.log('Selected category:', value);
        setSelectedProduct({
            ...selectedProduct,
            category: value,
        });

        console.log('Selected product:', selectedProduct);
    };

    const handleImageChange = (info) => {
        console.log('Image upload info:', info);
        const imageUrl = `../../assets/${info.file.name}`;
        setSelectedProduct({
            ...selectedProduct,
            image: imageUrl,
        });
        console.log('Image URL:', imageUrl);
        message.success(`${info.file.name} file uploaded successfully`);
    };

    const handleCreateProduct = () => {
        setIsCreateMode(true);
        setSelectedProduct({
            key: '',
            name: '',
            description: '',
            price: '',
            quantity: '',
            category: '',
            image: '',
        });
        setIsModalVisible(true);
        setIsDeleteModalVisible(false); // Ensure delete modal is closed when creating
    };

    const handleSaveProduct = () => {
        if (isCreateMode) {
            setData([...data, selectedProduct]);
        } else {
            setData((prevData) =>
                prevData.map((item) =>
                    item.key === selectedProduct.key ? selectedProduct : item
                )
            );
        }
        handleModalClose();
    };

    const handleDeleteProduct = () => {
        setData(data.filter((item) => item.key !== productToDelete.key));
        setIsDeleteModalVisible(false);
        message.success('Product deleted successfully');
    };

    const showDeleteConfirmation = (record) => {
        setProductToDelete(record);
        setIsDeleteModalVisible(true);
        setIsModalVisible(false); // Ensure update modal is closed when confirming delete
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'key',
            sorter: (a, b) => a.key - b.key,
            render: text => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            render: name => (
                <div style={{ width: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {name}
                </div>
            ),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            sorter: (a, b) => a.description.localeCompare(b.description),
            render: description => (
                <div style={{ width: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {description}
                </div>
            ),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price,
            render: price => `$${price}`,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (_, record) => (
                <span
                    style={{
                        padding: '5px 12px',
                        borderRadius: '50px',
                        backgroundColor: record.quantity > 0 ? '#4CAF50' : '#F44336',
                        color: 'white',
                    }}
                >
                    {record.quantity > 0 ? 'Còn hàng' : 'Hết hàng'}
                </span>
            ),
        },
        {
            title: 'Category',
            dataIndex: 'category',
            render: category => category ? category.name : 'N/A',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            // just get name 
            render: image => image ? image.split('/').pop() : 'N/A',
        },
        {
            title: 'Actions',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        icon={<EditOutlined />}
                        type="primary"
                        onClick={() => handleRowClick(record)}
                        style={{ border: '1px solid #1890ff' }}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        type="danger"
                        onClick={() => showDeleteConfirmation(record)}
                        style={{ border: '1px solid rgb(0, 0, 0)' }}
                    />
                </Space>
            ),
        },
    ];


    useEffect(() => {
        const formattedData = products.map((product, index) => ({
            key: index + 1,
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            category: product.category,
            image: product.image,
        }));
        setData(formattedData);


    }, [products]);

    useEffect(() => {
        const formattedCategories = categories.map((category) => ({
            id: category.id,
            name: category.name,
        }));
        setCategoryOptions(formattedCategories);

        console.log('Categories:', formattedCategories);
    }, [categories]);


    return (
        <div
            style={{
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                margin: '20px',
            }}
        >
            {/* Create Product Button */}
            <Button
                icon={<PlusOutlined />}
                style={{ marginBottom: '20px' }}
                onClick={handleCreateProduct}
            >
                Create
            </Button>

            <Table
                columns={columns}
                dataSource={data}
                bordered
            />

            {/* Modal for Product Details with Input Fields */}
            {isModalVisible && (
                <Modal
                    title={isCreateMode ? 'Create Product' : 'Edit Product'}
                    visible={isModalVisible}
                    onCancel={handleModalClose}
                    footer={[
                        <Button key="close" onClick={handleModalClose}>
                            Close
                        </Button>,
                        <Button key="save" type="primary" onClick={handleSaveProduct}>
                            {isCreateMode ? 'Create Product' : 'Save Changes'}
                        </Button>,
                    ]}
                >
                    <Form layout="vertical">
                        <Form.Item label="Name">
                            <Input
                                value={selectedProduct.name}
                                onChange={(e) => handleInputChange(e, 'name')}
                            />
                        </Form.Item>

                        <Form.Item label="Description">
                            <Input.TextArea
                                value={selectedProduct.description}
                                onChange={(e) => handleInputChange(e, 'description')}
                            />
                        </Form.Item>

                        <Form.Item label="Price">
                            <Input
                                type="number"
                                value={selectedProduct.price}
                                onChange={(e) => handleInputChange(e, 'price')}
                            />
                        </Form.Item>

                        <Form.Item label="Quantity">
                            <Input
                                type="number"
                                value={selectedProduct.quantity}
                                onChange={(e) => handleInputChange(e, 'quantity')}
                            />
                        </Form.Item>

                        <Form.Item label="Category">
                            <Select
                                value={selectedProduct.category.id}
                                onChange={(value) => handleCategoryChange(value)}
                            >
                                {categories.map(category => (
                                    <Select.Option key={category.id} value={category.id}>
                                        {category.name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item label="Image">
                            <Upload
                                name="image"
                                accept=".png, .jpg, .jpeg"
                                beforeUpload={() => false} // Prevent auto upload
                                customRequest={({ file, onSuccess }) => {
                                    setTimeout(() => {
                                        onSuccess(file);
                                    }, 0);
                                }}
                                onChange={handleImageChange}
                                showUploadList={false}
                            >
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                            <Image
                                src={`../../assets/${selectedProduct.image}`}
                                alt={selectedProduct.image}
                                style={{ width: '150px', height: '150px', marginTop: '16px' }}
                            />
                        </Form.Item>
                    </Form>
                </Modal>
            )
            }

            {/* Delete Confirmation Modal */}
            {
                isDeleteModalVisible && (
                    <Modal
                        title="Confirm Deletion"
                        visible={isDeleteModalVisible}
                        onCancel={() => setIsDeleteModalVisible(false)}
                        footer={[
                            <Button key="cancel" onClick={() => setIsDeleteModalVisible(false)}>
                                Cancel
                            </Button>,
                            <Button key="delete" type="primary" danger onClick={handleDeleteProduct}>
                                Delete
                            </Button>,
                        ]}
                    >
                        <p>Are you sure you want to delete this product?</p>
                    </Modal>
                )
            }
        </div >
    );
};

export default Products;
