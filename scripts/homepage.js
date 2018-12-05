const axios = require("axios");
const buildPosts = require("./build-posts");
const server = "https://f-my-code.herokuapp.com";


function getPosts() {
  axios.get(`${server}/posts`)
    .then(res => {
      buildPosts(res.data);
    });
}

document.addEventListener("DOMContentLoaded", getPosts);
