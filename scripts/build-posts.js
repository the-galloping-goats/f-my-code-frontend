const axios = require("axios");
const buildElement = require("./utils");
const server = require("./server");
const listeners = require("./btnEvents");
// const userBtns = require("./homepage");

const postsDiv = document.querySelector("#showPosts");
const user_id = localStorage.getItem("user_id");

function buildPosts() {
  server.getAllPosts()
    .then(posts => {
      posts.data.forEach(post => {
        // hideBtns(user_id)
        postsDiv.appendChild(buildPanel(post));
      })
    })
}

function buildPanel({ id, user_id, description, code, title, username, rating }) {
  

  const titleHTML = buildElement("h3", { innerText: title });
  
  const commButHTML = buildElement("a", {
    id: "read-comments",
    innerText: "Read Comments",
    listeners: [
      { action: "click", callback: listeners.getCommentsHandler }]
  });
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

  const delButHTML = buildElement("a", {
    id: "remove-post", 
    innerText: "❌",
    listeners: [
      { action: "click", callback: listeners.getDeleteHandler }]
      // class: ["hide"]
  });

  const cardHTML = buildElement("div", { class: [ "card-panel" ],
  attributes: { "data-post-id" : id , "data-user-id": user_id },
  children: [ delButHTML ,ratingHTML, titleHTML, userHTML, descHTML, codeHTML, commButHTML ]});

  const cellHTML = buildElement("div", { class: [ "col", "m12" ], children: [ cardHTML ]});

  const rowHTML = buildElement("div", { class: [ "row" ], children: [ cellHTML ]});

  return rowHTML;
}

module.exports = buildPosts;
