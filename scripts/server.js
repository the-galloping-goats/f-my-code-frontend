const axios = require('axios')
const heroku = "http://localhost:3000";


function getAllPosts() {
  return axios.get(heroku + "/posts")
}

function getAllComments(id) {
  return axios.get(heroku + "/posts/" + id + "/comments")
}

function createPost(newPost) {
  const token = localStorage.getItem("token")
  return axios.post(heroku + "/posts", newPost, {
    headers: {
      Authorization: "bearer " + token
    }
  })
}

function createComment(id, newComment) {
  return axios.post(heroku + "/posts/" + id + "/comments", newComment)
}

function updatePost(id, newPost) {
  console.log(newPost);
  
  const token = localStorage.getItem("token")
  return axios.put(heroku + "/posts/" + id, newPost, {
    headers: {
      Authorization: "bearer " + token
    }
  })
}

function updateComment(id, newComment) {
  return axios.put(heroku + "/posts/" + id + "/comments", newComment)
}

function delPost(id) {
  const token = localStorage.getItem("token")
  return axios.delete(
    heroku + "/posts/" + id, {
      headers: {
        Authorization: "bearer " + token
      }
    })
}

function delComment(id, cId) {
  return axios.delete(heroku + "/posts/" + id + "/comments", cId)
}

function createRating(entry, id) {
  const token = localStorage.getItem("token");
  return axios.post(
    heroku + "/posts/" + id + "/ratings",
    entry, {
      headers: {
        Authorization: "bearer " + token
      }
    });
}

function getRating(id) {
  return axios.get(heroku + "/posts/" + id + "/rating")
}

function votes() {

}

module.exports = {
  getAllPosts,
  getAllComments,
  createPost,
  createComment,
  updatePost,
  updateComment,
  delPost,
  createRating,
  delComment
}
