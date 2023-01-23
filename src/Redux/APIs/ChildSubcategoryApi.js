import axios from "axios";

const token = JSON.parse((JSON.stringify(localStorage.getItem("ADMIN"))))
const headersParam = {
    Authorization: `Bearer ${token}`,
};

export const loadChildSubcategoryApi = async () => await axios.get('http://localhost:8080/api/childCategories/getall', { headers: headersParam })

export const getSingleChildSubcategoryApi = async (id) => await axios.get(`http://localhost:8080/api/childCategories//${id}`, { headers: headersParam })

export const createChildSubcategoryApi = async (childSubcatgeory) => await axios.post('http://localhost:8080/api/childCategories/create', childSubcatgeory, { headers: headersParam })

export const updateChildSubcategoryApi = async (updateChildSubcategory) => await axios.patch(`http://localhost:8080/api/childCategories/${updateChildSubcategory.id}`, updateChildSubcategory, { headers: headersParam })

export const deleteChildSubcategoryApi = async (id) => await axios.delete(`http://localhost:8080/api/childCategories//${id}`, { headers: headersParam }) 