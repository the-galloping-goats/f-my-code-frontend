const axios = require("axios");
const buildElement = require("./utils");

const postsDiv = document.querySelector("#showPosts");

function buildPosts (posts) {
  console.log(posts);

  posts.forEach(post => {
    postsDiv.appendChild(buildPanel(post));
  });
}

function buildPanel({ id, description, code, title }) {
  const titleHTML = buildElement("h3", { innerText: title });
  const descHTML = buildElement("div", { innerText: description });
  const codeHTML = buildElement("code", { innerText: code });
  const commButHTML = buildElement("a", { id: "read-comments", innerText: "Read Comments" })

  const cardHTML = buildElement("div", { class: [ "card-panel" ], children: [ titleHTML, descHTML, codeHTML, commButHTML ]})

  const cellHTML = buildElement("div", { class: [ "col", "m12" ], children: [ cardHTML ]});

  const rowHTML = buildElement("div", { class: [ "row" ], children: [ cellHTML ]});

  return rowHTML;
}

module.exports = buildPosts;
