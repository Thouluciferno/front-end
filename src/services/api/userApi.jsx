import axios from '../../utils/axiosConfig';

const setAuthHeader = () => {
    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

const userApiWithAuth = {

    myInfo: () => {
        setAuthHeader();
        return axios.get('/users/myInfo');
    },

    updateProfile: (formData) => {
        setAuthHeader();
        return axios.put('/users', formData);
    },

    login: (credentials) => {
        return axios.post('/auth/token', credentials);
    },

    logout: () => {
        localStorage.removeItem('Token');
        delete axios.defaults.headers.common['Authorization'];
    },
};

const userApiWithoutAuth = {
    register: (userData) => axios.post('/auth/register', userData),
};

export { userApiWithAuth, userApiWithoutAuth }; // Export both APIs
