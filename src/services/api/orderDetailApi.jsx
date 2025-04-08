
import axios from '../../utils/axiosConfig';

const setAuthHeader = () => {
    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

const orderDetailApi = {
    getOrderDetail: async () => {
        setAuthHeader();
        return axios.get(`/orderDetails`);
    },

    createOrderDetail: async (orderDetail) => {
        setAuthHeader();
        return axios.post(`/orderDetails/create`, orderDetail);
    },

};
export default orderDetailApi;