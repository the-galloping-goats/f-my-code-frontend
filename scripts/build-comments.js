const axios = require("axios");
const buildElement = require("./utils")
const btns = require("./btnEvents")


function buildComments(comments) {
  console.log(comments)
  getCommentsHandler()

  postMessage.forEach(comment => {
    listHTML.appendChild(buildCommentPanel(comment))
    const unlistHTML = buildElement("ul", { children: [listHTML] })
  });
}

function buildCommentPanel({ id, username, comment }) {

const userHTML = buildElement("h4", { innerText: username })
const commHTML = buildElement("span", { innerText: comment })
const commButHTML = buildElement("a", { id: "shrink-comments", innerText: "Shrink Comments" })

const listHTML = buildElement("li", { children: [userHTML, commHTML, commButHTML] })

return rowHTML;
}

module.exports = buildComments;