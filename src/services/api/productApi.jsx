// src/api/productApi.js

import axios from '../../utils/axiosConfig';


const productApi = {

    getAll: (params = {}) => axios.get('/products', { params }),

    getById: (id) => axios.get(`/products/${id}`),

    create: (productData) => axios.post('/products', productData),

    top4: () => axios.get('/products/top4'),

    top4later: () => axios.get('/products/top4later'),



};

export default productApi;
