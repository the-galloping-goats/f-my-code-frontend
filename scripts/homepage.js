const buildPosts = require("./build-posts");
// const server = "localhost:3000";
const axios = require("axios")
const newpost = require("./postForm.js")

const {
  getAllPosts

} = require('./server')

// if (window.location.href === 'http://127.0.0.1:8080/html/newpost.html'){
//  newpost.create()
// }
// if (window.location.href === "http://127.0.0.1:8080/") {

getAllPosts()
  .then((res) => {
    buildPosts(res.data)
    document.querySelector("#postPage").addEventListener('click', (e) => {
      // don't hard code the url. It makes deploying more difficult
       window.location.replace("http://127.0.0.1:8080/html/newpost.html")
     })
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

// function hideBtns() {
//   const loggedIn = !!localStorage.getItem("token")
//   const userId = localStorage.getItem("user_id")
//   const postId = document.querySelectorAll("#id").getAttribute("data-post-id")

//   if (loggedIn) {
//     document.querySelector("#rating").classList.remove("hide")
//     document.querySelector("#createPost").classList.remove("hide")
//   }

//   if (loggedIn && userId === postId) {
//     document.querySelector("#remove-post").classList.remove("hide")
//     document.querySelector("#edit-post").classList.remove("hide")
//   }
// }

document.addEventListener("DOMContentLoaded", getAllPosts);
