import axios from '../../utils/axiosConfig';

const setAuthHeader = () => {
    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const statisticsApi = {
    getOrders: () => {
        setAuthHeader();
        return axios.get('/statistics/orders');
    },

    getProducts: () => {
        setAuthHeader();
        return axios.get('/statistics/products');
    },

    getCustomers: () => {
        setAuthHeader();
        return axios.get('/statistics/customers');
    },

    getRevenue: () => {
        setAuthHeader();
        return axios.get('/statistics/revenue');
    },

    getTop10Products: () => {
        setAuthHeader();
        return axios.get('/statistics/best-sellers');
    }
};


export default statisticsApi;