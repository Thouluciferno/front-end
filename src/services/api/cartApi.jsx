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

    addProductToCart: async (cartId, productId) => {
        setAuthHeader();
        return axios.post(`/carts/${cartId}/products/${productId}`);
    },


};

export default cartApi;