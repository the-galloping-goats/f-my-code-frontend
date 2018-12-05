const axios = require("axios");
const buildElement = require("./utils");

function buildPosts (posts) {
  console.log(posts);

  posts.forEach(post => {
    console.log(buildPanel(post));
  });
}

function buildPanel({ id, description, code, title }) {
  const titleHTML = buildElement("h2", { innerText: title });
  const descHTML = buildElement("span", { innerText: description });
  const codeHTML = buildElement("code", { innerText: code });

  const cellHTML = buildElement("div", { class: [ "col", "m12" ], children: [titleHTML, descHTML, codeHTML]});

  const rowHTML = buildElement("div", { class: [ "row" ], children: [ cellHTML ]});

  return rowHTML;
}

module.exports = buildPosts;
