const axios = require("axios");
const buildPosts = require("./build-posts");
const server = "https://f-my-code.herokuapp.com";


function getData() {
  axios.get(`${server}/posts`)
    .then(res => {
      buildPosts(res.data);
    })
    .catch(err => console.log(err));
}

document.addEventListener("DOMContentLoaded", getData );
