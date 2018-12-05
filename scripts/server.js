const axios = require('axios')
const heroku = "https://f-my-code.herokuapp.com";

function getAllPosts() {
  return axios.get(heroku)
}

function getAllComments() {
  return axios.get(heroku)
}

function createPost(newPost) {
  return axios.post(heroku)
}

function createComment(newComment) {
  return axios.post(heroku)
}

function updatePost(id, newPost) {
  return axios.put(heroku + "/" + id, newPost)
}

function updateComment(id, newComment) {
  return axios.put(heroku + "/" + id, newComment)
}

function delPost(id) {
  return axios.delete(heroku + "/" + id)
}

function delComment(id) {
  return axios.delete(heroku + "/" + id)
}

module.exports = {
  getAllPosts,
  getAllComments,
  createPost,
  createComment,
  updatePost,
  updateComment,
  delPost,
  delComment
}