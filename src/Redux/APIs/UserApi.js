import axios from 'axios';

const token = JSON.parse((JSON.stringify(localStorage.getItem("ADMIN"))));
const headersParam = {
    "Authorization": `Bearer ${token}`
};

export const loadUserApi = async () => await axios.get('http://localhost:8080/api/user/getall', { headers: headersParam })

export const loadUserContactListApi = async () => await axios.get('http://localhost:8080/api/contactus/', { headers: headersParam })