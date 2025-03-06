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

    findAllById: async (ids) => {
        setAuthHeader();
        console.log("Sending IDs:", ids);
        console.log("Formatted JSON:", JSON.stringify(ids));
        return axios.post(`/carts/filter`, ids); // Send IDs as a body payload
    },

    addToCart: async (productId, quantity) => {
        setAuthHeader();
        return axios.post(`/carts/create`, { productId, quantity });
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