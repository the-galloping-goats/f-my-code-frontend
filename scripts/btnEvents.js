const buildComments = require("./build-comments");
const server = require("./server");



function getCommentsHandler(e) {
  const button = e.target
  const cardPanel = button.parentElement
  const id = cardPanel.getAttribute("data-post-id")

  return server.getAllComments(id)
    .then(res => {
      console.log();
      const comments = res.data;
      const listHTML = buildComments(comments);

      cardPanel.appendChild(listHTML);

    })

  button.forEach(el => {

  })

}

function getDeleteHandler(e){
  console.log(e.target.getAttribute('data-post-id'));
  
  server.delPost(e.target.getAttribute('data-post-id'))
    .then((res) => {
      removePostsDOM(res.data)
    })
}

function removePostsDOM() {
  const allPosts = document.querySelector("#showPosts")
  while (allPosts.children > 0) {
    allPosts.children[0].remove()
  }
}

function voteUp(e) {
  const button = e.target;
  const postId = button.getAttribute("data-post-id");

  server.createRating({ rating: 1 }, postId);
}

module.exports = { getCommentsHandler, getDeleteHandler }
