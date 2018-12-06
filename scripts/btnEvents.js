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


module.exports = { getCommentsHandler }
