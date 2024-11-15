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
        return axios.post('/address/create', address);
    },
    myAddresses: async () => {
        setAuthHeader();
        return axios.get('/address/myAddress');
    },

    update: async (address) => {
        setAuthHeader();
        return axios.put(`/address/update`, address);
    },

};

export default addressApi;