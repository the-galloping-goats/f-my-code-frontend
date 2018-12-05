const axios = require("axios");
const buildElement = require("./utils");


function buildComments(comments) {
  console.log(comments)

  postMessage.forEach(comment => {
    listHTML.appendChild(buildComPanel(comment))
    const unlistHTML = buildElement("ul", { children: [listHTML] })
  });
}

function buildComPanel({ id, username, comment })

const userHTML = buildElement("h4", { innerText: username })
const commHTML = buildElement("span", { innerText: comment })
const commButHTML = buildElement("a", { id: "shrink-comments", innerText: "Shrink Comments" })


const listHTML = buildElement("li", { children: [userHTML, commHTML, commButHTML] })


return rowHTML;

module.exports = buildComments;