import axios from '../../utils/axiosConfig';

const categoryApi = {
    getAll: () => axios.get('/categories'),
    getById: (id) => axios.get(`/categories/${id}`),
    create: (categoryData) => axios.post('/categories', categoryData),
    update: (id, categoryData) => axios.put(`/categories/${id}`, categoryData),
    delete: (id) => axios.delete(`/categories/${id}`),
};

export default categoryApi;