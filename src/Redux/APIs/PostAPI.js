import axios from "axios";

const token = JSON.parse((JSON.stringify(localStorage.getItem("ADMIN"))))
const headersParam = {
    Authorization: `Bearer ${token}`,
};


export const loadPostApi = async () => await axios.get('http://localhost:8080/api/post', { headers: headersParam })

export const getSinglePostApi = async (id) => await axios.get(`http://localhost:8080/api/post/${id}`, { headers: headersParam })

export const createPostApi = async (post) => await axios.post('http://localhost:8080/api/post/create', post, { headers: headersParam })

export const deletePostApi = async (id) => await axios.delete(`http://localhost:8080/api/post/${id}`, { headers: headersParam })

export const updatePostApi = async (updatePost) => await axios.put(`http://localhost:8080/api/post/${updatePost.get('id')}`, updatePost, { headers: headersParam })