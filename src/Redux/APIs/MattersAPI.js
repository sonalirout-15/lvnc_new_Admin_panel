import axios from "axios";

const token = JSON.parse((JSON.stringify(localStorage.getItem("ADMIN"))))
const headersParam = {
    Authorization: `Bearer ${token}`,
};

export const loadMettersApi = async () => await axios.get('http://localhost:8080/api/metters', { headers: headersParam })

export const getSingleMettersApi = async (id) => await axios.get(`http://localhost:8080/api/metters/${id}`, { headers: headersParam })

export const createMettersApi = async (metters) => await axios.post('http://localhost:8080/api/metters/create', metters, { headers: headersParam })

export const deleteMettersApi = async (id) => await axios.delete(`http://localhost:8080/api/metters/${id}`, { headers: headersParam })

export const updateMettersApi = async (updateMetters) => await axios.put(`http://localhost:8080/api/metters/${updateMetters.get('id')}`, updateMetters, { headers: headersParam })