import axios from 'axios'

const token = JSON.parse((JSON.stringify(localStorage.getItem("ADMIN"))))
const headersParam = {
    Authorization: `Bearer ${token}`,
};

export const loadLatestNewsApi = async () => await axios.get('http://localhost:8080/api/latestNews/', { headers: headersParam })

export const getSingleLatestNewsApi = async (id) => await axios.get(`http://localhost:8080/api/latestNews/${id}`, { headers: headersParam })

export const createLatestNewsApi = async (latestNews) => await axios.post('http://localhost:8080/api/latestNews/create', latestNews, { headers: headersParam })

export const deleteLatestNewsApi = async (id) => await axios.delete(`http://localhost:8080/api/latestNews/${id}`, { headers: headersParam })

export const updateLatestNewsApi = async (updateLatestNews) => await axios.put(`http://localhost:8080/api/latestNews/${updateLatestNews.get('id')}`, updateLatestNews, { headers: headersParam })