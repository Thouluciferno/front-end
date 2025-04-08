import axios from '../../utils/axiosConfig';

const setAuthHeader = () => {
    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

const orderApi = {
    getOrders: async () => {
        setAuthHeader();
        return axios.get('/orders/myOrders');
    },

    createOrder: async (order) => {
        setAuthHeader();
        return axios.post('/orders/create', order);
    }
};

export default orderApi;