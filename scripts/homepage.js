const axios = require("axios");
const buildPosts = require("./build-posts");
const server = "localhost:3000";

const {
  getAllPosts,
  getAllComments,
  updatePost,
  updateComment,
  delPost,
  delComment
} = require('./server')




////////////////////////////  GET ALL ////////////////////////////////////////
getAllPosts()
  .then((res) => {
    buildPosts(res.data)
  })
  .catch(err => console.log(err))

////////////////////////////  UPDATE POSTS ////////////////////////////////////////



////////////////////////////  UPDATE COMMENTS ///////////////////////////////////////




////////////////////////////  REMOVE POST & COMMENTS ////////////////////////////////


////////////////////////////  REMOVE COMMENT ////////////////////////////////////////

function hideBtns() {
  const loggedIn = !!localStorage.getItem("token")
  const userId = localStorage.getItem("user_id")
  const postId = document.querySelectorAll("#id").getAttribute("data-post-id")

  if (loggedIn) {
    document.querySelector("#rating").classList.remove("hide")
    document.querySelector("#createPost").classList.remove("hide")
  }

  if (loggedIn && userId === postId) {
    document.querySelector("#remove-post").classList.remove("hide")
    document.querySelector("#edit-post").classList.remove("hide")
  }
}


////////////////////////////  ADD BUTTON EVENTS ////////////////////////////////////////


module.exports = {
  hideBtns,
}

document.addEventListener("DOMContentLoaded", getAllPosts);
