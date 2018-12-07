const buildComments = require("./build-comments");
const server = require("./server");



<<<<<<< HEAD
function getCommentsHandler(cb) {
  return function (e) {
=======
function getCommentsHandler(buildPosts) {
  return function(e) {
>>>>>>> rerendering and downvoting work on voting
    const button = e.target
    const cardPanel = button.parentElement
    const id = cardPanel.getAttribute("data-post-id")

    return server.getAllComments(id)
      .then(res => {
<<<<<<< HEAD
        console.log();
=======
>>>>>>> rerendering and downvoting work on voting
        const comments = res.data;
        const listHTML = buildComments(comments);

        cardPanel.appendChild(listHTML);

      })
<<<<<<< HEAD

    button.forEach(el => {

    })
  }
}

function getDeleteHandler(cb) {
  return function (e) {
    server.delPost(e.target.getAttribute('data-post-id'))
      .then((res) => {
        removePostsDOM(res.data)
        cb()
      })
=======
  }
}

function getDeleteHandler(buildPosts){
  return function(e){
    server.delPost(e.target.getAttribute('data-post-id'))
    .then((res) => {
      removePostsDOM(res.data)
      buildPosts()
    })
>>>>>>> rerendering and downvoting work on voting
  }
}

function removePostsDOM() {
  const allPosts = document.querySelector("#showPosts")
  while (allPosts.children.length > 0) {
    allPosts.children[0].remove()
  }
}

<<<<<<< HEAD
function voteUp(cb) {
  return function (e) {
    const button = e.target;
    const postId = button.getAttribute("data-post-id");

    server.createRating({
      rating: 1
    }, postId)
  }
}

  module.exports = {
    getCommentsHandler,
    getDeleteHandler,
    voteUp
  }
=======
function voteUp(buildPosts) {
  return function(e) {
    const button = e.target;
    const postId = button.getAttribute("data-post-id");

    server.createRating({ rating: 1 }, postId)
      .then(() => {
        removePostsDOM();
        buildPosts();
      })
  }
}

function voteDown(buildPosts) {
  return function(e) {
    const button = e.target;
    const postId = button.getAttribute("data-post-id");

    server.createRating({ rating: -1 }, postId)
      .then(() => {
        removePostsDOM();
        buildPosts();
      });
  }
}

module.exports = { getCommentsHandler, getDeleteHandler, voteUp, voteDown }
>>>>>>> rerendering and downvoting work on voting
