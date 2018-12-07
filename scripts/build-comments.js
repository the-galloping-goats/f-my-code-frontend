// const axios = require("axios");
const buildElement = require("./utils")
const btns = require("./btnEvents")

function buildComments(comments) {

  const listHTML = buildElement("ul", { class: [ "comment-list" ] })
  const commButHTML = buildElement("a", { id: "shrink-comments", innerText: "Shrink Comments" })

  comments.forEach(comment => {

    const userHTML = buildElement("h4", { innerText: comment.username })
    const commHTML = buildElement("span", { innerText: comment.content })
    const itemHTML = buildElement("li", { children: [userHTML, commHTML] })

    listHTML.appendChild(itemHTML);
  })

  listHTML.appendChild(commButHTML);

  return listHTML;
}

module.exports = buildComments;
