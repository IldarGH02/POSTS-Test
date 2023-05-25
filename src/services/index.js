import axios from "axios"

const getPosts = () => {
    const options = {
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts`
    }
    return axios.request(options)
}

const getComments = (id) => {
    const options = {
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    }
    return axios.request(options)
}

const getUsers = () => {
    const options = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }
    return axios.request(options)
}

const getUserPosts = (userId) => {
    const options = {
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    }
    return axios.request(options)
}

export {getPosts, getComments, getUsers, getUserPosts}