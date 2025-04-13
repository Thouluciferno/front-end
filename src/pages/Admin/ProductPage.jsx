import React, { useState, useEffect } from 'react'
import { Layout } from 'antd';


import { ProductAdmin } from '../../components';

import productApi from '../../services/api/productApi';

import categoryApi from '../../services/api/categoryApi';

const ProductPage = () => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productApi.getAll();
                const categories = await categoryApi.getAll();

                console.log('Products:', response.data)
                setProducts(response.data)
                setCategories(categories.data)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }

        fetchProducts()
    }, [])

    return (
        <Layout>
            <ProductAdmin products={products} categories={categories} />
        </Layout >
    )
}

export default ProductPage