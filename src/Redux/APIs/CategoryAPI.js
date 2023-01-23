import axios from "axios";

const token = JSON.parse((JSON.stringify(localStorage.getItem("ADMIN"))))
const headersParam = {
    Authorization: `Bearer ${token}`,
};

export const loadCategoryApi = async () => await axios.get('http://localhost:8080/api/categories', { headers: headersParam })

export const getSingleCategoryApi = async (id) => await axios.get(`http://localhost:8080/api/categories/${id}`, { headers: headersParam })

export const createCategoryApi = async (category) => await axios.post('http://localhost:8080/api/categories/create', category, { headers: headersParam })

export const updateCategoryApi = async (updateCategory) => await axios.patch(`http://localhost:8080/api/categories/${updateCategory.id}`, updateCategory, { headers: headersParam })

export const deleteCategoryApi = async (id) => await axios.delete(`http://localhost:8080/api/categories/${id}`, { headers: headersParam }) 