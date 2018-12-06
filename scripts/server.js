const axios = require('axios')
const heroku = "https://f-my-code.herokuapp.com";


function getAllPosts() {
  return axios.get(heroku + "/posts")
}

function getAllComments(id) {
  return axios.get(heroku + "/posts/" + id + "/comments")
}

function createPost(newPost) {
  return axios.post(heroku + "/posts", newPost)
}

function createComment(id, newComment) {
  return axios.post(heroku + "/posts/" + id + "/comments", newComment)
}

function updatePost(id, newPost) {
  return axios.put(heroku + "/posts/" + id, newPost)
}

function updateComment(id, newComment) {
  return axios.put(heroku + "/posts/" + id + "/comments", newComment)
}

function delPost() {
  return axios.delete(heroku + "/posts/" + id)
}

function delComment(id, cId) {
  return axios.delete(heroku + "/posts/" + id + "/comments", cId)
}

function getRating(id) {
  return axios.get(heroku + "/posts/" + id + "/rating")
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
