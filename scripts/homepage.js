const axios = require("axios");
const buildPosts = require("./build-posts");
const server = "https://f-my-code.herokuapp.com";

const {
  getAllPosts,
  getAllComments,
  updatePost,
  updateComment,
  delPost,
  delComment
} = require('./server')


// function getData() {
//   axios.get(`${server}/posts`)
//     .then(res => {
//       buildPosts(res.data);
//     })
//     .catch(err => console.log(err));
// }

////////////////////////////  GET ALL ////////////////////////////////////////
getAllPosts()
  .then((res) => {
    buildPosts(res.data)
  })
  .catch(err => console.log(err))


getAllComments() 
  .then((res) => {
    buildComments(res.data)
  })
.catch(err => console.log(err))

////////////////////////////  UPDATE POSTS ////////////////////////////////////////

// updatePost()
// .then((res) => {
//   buildPosts(res.data)
// })

////////////////////////////  UPDATE COMMENTS ///////////////////////////////////////

// updateComment() 
//   .then((res) => {

//   })


////////////////////////////  REMOVE POST & COMMENTS ////////////////////////////////




////////////////////////////  REMOVE COMMENT ////////////////////////////////////////




////////////////////////////  ADD BUTTON EVENTS ////////////////////////////////////////




// document.addEventListener("DOMContentLoaded", getAllPosts);