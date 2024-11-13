import axios from '../../utils/axiosConfig';

const setAuthHeader = () => {
    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

const addressApi = {
    create: async (address) => {
        setAuthHeader();
        return axios.post('/addresses', address);
    },
    myAddresses: async () => {
        setAuthHeader();
        return axios.get('/addresses/myAddresses');
    },
    update: async (addressId, address) => {
        setAuthHeader();
        return axios.put(`/addresses/${addressId}`, address);
    },
};

export default addressApi;