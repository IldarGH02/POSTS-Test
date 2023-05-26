import axios from "axios"

const getPosts = () => {
    const options = {
      method: 'GET',
      url: `${process.env.REACT_APP_PUBLIC_API_URL}/posts`,
    }
    return axios.request(options)
}

const getComments = (id) => {
    const options = {
      method: 'GET',
      url: `${process.env.REACT_APP_PUBLIC_API_URL}/posts/${id}/comments`,
    }
    return axios.request(options)
}

const getUsers = () => {
    const options = {
      method: 'GET',
      url: `${process.env.REACT_APP_PUBLIC_API_URL}/users`,
    }
    return axios.request(options)
}

const getUserPosts = (userId) => {
    const options = {
      method: 'GET',
      url: `${process.env.REACT_APP_PUBLIC_API_URL}/posts?userId=${userId}`,
    }
    return axios.request(options)
}

export {getPosts, getComments, getUsers, getUserPosts}