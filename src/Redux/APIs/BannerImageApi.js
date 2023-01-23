import axios from 'axios';

const token = JSON.parse((JSON.stringify(localStorage.getItem("ADMIN"))))
const headersParam = {
    Authorization: `Bearer ${token}`,
};

export const loadBannerImageApi = async () =>
    await axios.get('http://localhost:8080/api/banner/getall', { headers: headersParam })

export const getSingleBannerImageApi = async (id) => await axios.get(`http://localhost:8080/api/banner/${id}`, { headers: headersParam })

export const createBannerImageApi = async (bannerImageData) => await axios.post('http://localhost:8080/api/banner/create', bannerImageData, {headers: headersParam})

export const deleteBannerImageApi = async (id) => await axios.delete(`http://localhost:8080/api/banner/${id}`, { headers: headersParam })

export const updateBannerImageApi = async (updateBanner) => await axios.put(`http://localhost:8080/api/banner/${updateBanner.get('id')}`, updateBanner, { headers: headersParam })