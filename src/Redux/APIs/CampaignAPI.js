import axios from 'axios'

const token = JSON.parse((JSON.stringify(localStorage.getItem("ADMIN"))))
const headersParam = {
    Authorization: `Bearer ${token}`,
};

export const loadCampaningApi = async () => await axios.get('http://localhost:8080/api/campaning', { headers: headersParam })

export const getSingleCampaningApi = async (id) => await axios.get(`http://localhost:8080/api/campaning/${id}`, { headers: headersParam })

export const createCampaningApi = async (campaning) => await axios.post('http://localhost:8080/api/campaning/create', campaning, { headers: headersParam })

export const deleteCampaningApi = async (id) => await axios.delete(`http://localhost:8080/api/campaning/${id}`, { headers: headersParam })

export const updateCampaningApi = async (updateCampaning) => await axios.put(`http://localhost:8080/api/campaning/${updateCampaning.get('id')}`, updateCampaning, { headers: headersParam })