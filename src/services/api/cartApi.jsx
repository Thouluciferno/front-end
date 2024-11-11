import axios from '../../utils/axiosConfig';

const setAuthHeader = () => {
    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

const cartApi = {

    myCart: async () => {
        setAuthHeader();
        return axios.get('/carts/myCart');
    },

    addToCart: async (productId) => {
        setAuthHeader();
        return axios.post(`/carts/${productId}`);
    },

    removeFromCart: async (productId) => {
        setAuthHeader();
        return axios.delete(`/carts/${productId}`);
    },

    clearCart: async () => {
        setAuthHeader();
        return axios.delete('/carts');
    },

    updateQuantity: async (productId, quantity) => {
        setAuthHeader();
        return axios.put(`/carts/${productId}`, { quantity });
    },

};

export default cartApi;