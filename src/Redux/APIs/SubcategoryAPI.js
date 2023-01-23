import axios from "axios";

const token = JSON.parse((JSON.stringify(localStorage.getItem("ADMIN"))))
const headersParam = {
    Authorization: `Bearer ${token}`,
};

export const loadSubcategoryApi = async () => await axios.get('http://localhost:8080/api/subcategories/', { headers: headersParam })

export const getSingleSubcategoryApi = async (id) => await axios.get(`http://localhost:8080/api/subcategories/${id}`, { headers: headersParam })

export const createSubcategoryApi = async (subcategory) => await axios.post('http://localhost:8080/api/subcategories/create', subcategory, { headers: headersParam })

export const deleteSubcategoryApi = async (id) => await axios.delete(`http://localhost:8080/api/subcategories/${id}`, { headers: headersParam })

export const updateSubcategoryApi = async (updateSubcategory) => await axios.patch(`http://localhost:8080/api/subcategories/${updateSubcategory.id}`, updateSubcategory, { headers: headersParam })
