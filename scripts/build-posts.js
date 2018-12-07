const axios = require("axios");
const buildElement = require("./utils");
const server = require("./server");
const listeners = require("./btnEvents");
const userBtns = require("./homepage");

const postsDiv = document.querySelector("#showPosts");
const user_id = localStorage.getItem("user_id");

const loggedIn = !!localStorage.getItem("token");

function buildPosts() {
  server.getAllPosts()
    .then(posts => {
      posts.data.forEach(post => {
        postsDiv.appendChild(buildPanel(
          post,
          listeners.getDeleteHandler(buildPosts),
          listeners.getCommentsHandler(buildPosts),
          listeners.voteUp(buildPosts)
        ));
      })
    })
}

function buildPanel({ id, user_id, description, code, title, username, rating }, getDeleteHandler, getCommentsHandler, voteUp) {


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

  const delButHTML = buildElement("a", {
    id: "remove-post",
    innerText: "❌",
    attributes: {"data-post-id": id },
    listeners: [
      { action: "click", callback: getDeleteHandler }]
  });

  const commButHTML = buildElement("a", {
    id: "read-comments",
    innerText: "Read Comments",
    listeners: [{
      action: "click",
      callback: getCommentsHandler
    }]
  });

  const upHTML = buildElement("a", {
    innerText: "↑",
    class: [ "vote", "upvote" ],
    attributes: { "data-post-id": id },
    listeners: [{
      action: "click",
      callback: voteUp
    }]
  });

  const downHTML = buildElement("a", {
    innerText: "↓",
    class: [ "vote", "downvote" ]
  });

  const votingHTML = [];

  if (loggedIn) {
    votingHTML.push(upHTML);
    votingHTML.push(ratingHTML);
    votingHTML.push(downHTML);
  } else {
    votingHTML.push(ratingHTML);
  }

  const voteWrapper = buildElement("div", {
    class: [ "vote-wrapper" ],
    children: votingHTML
  });

  const cardHTMLChild = [ delButHTML, titleHTML, userHTML, descHTML, codeHTML, commButHTML ];

  const cardHTML = buildElement("div", {
    class: [ "" ],
    attributes: { "data-post-id" : id },
    children: cardHTMLChild
  });

  const contentCellHTML = buildElement("div", {
    class: [ "col", "m11" ],
    children: [ cardHTML ]
  });

  const voteCellHTML = buildElement("div", {
    class: [ "col", "m1" ],
    children: [ voteWrapper ]
  });

  const rowHTML = buildElement("div", {
    class: [ "row", "card-panel" ],
    children: [ voteCellHTML, contentCellHTML ]
  });

  return rowHTML;
}

module.exports = buildPosts;
