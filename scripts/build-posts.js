const axios = require("axios");
const buildElement = require("./utils");
const server = require("./server");
const listeners = require("./btnEvents");

const postsDiv = document.querySelector("#showPosts");

function buildPosts() {
  server.getAllPosts()
    .then(posts => {
      posts.data.forEach(post => {
        postsDiv.appendChild(buildPanel(post));
      })
    })
}

function buildPanel({ id, description, code, title, username, rating }) {
  const titleHTML = buildElement("h3", { innerText: title });
  const descHTML = buildElement("div", { innerText: description });
  const codeHTML = buildElement("code", { innerText: code });
  const userHTML = buildElement("span", {
    innerText: username,
    class: [ "user" ]
  });
  const ratingHTML = buildElement("span", {
    innerText: rating,
    class: [ "rating" ]
  });
  const commButHTML = buildElement("a", {
    id: "read-comments",
    innerText: "Read Comments",
    listeners: [
      { action: "click", callback: listeners.getCommentsHandler }]
  });

  const cardHTML = buildElement("div", { class: [ "card-panel" ], children: [ ratingHTML, titleHTML, userHTML, descHTML, codeHTML, commButHTML ]});

  const cellHTML = buildElement("div", { class: [ "col", "m12" ], children: [ cardHTML ]});

  const rowHTML = buildElement("div", { class: [ "row" ], children: [ cellHTML ]});

  return rowHTML;
}

module.exports = buildPosts;
