// src/api/productApi.js

import axios from '../../utils/axiosConfig';


const productApi = {

    getAll: (params = {}) => axios.get('/products', { params }),

    getById: (id) => axios.get(`/products/${id}`),

    create: (productData) => axios.post('/products', productData),




};

export default productApi;
