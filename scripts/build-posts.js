const axios = require("axios");
<<<<<<< HEAD
=======
const buildElement = require("./utils");
>>>>>>> buildposts

function buildPosts (posts) {
  console.log(posts);

<<<<<<< HEAD
  posts.forEach(post => buildPanel(post));
}

function buildPanel({ id, description, code, title }) {
  const rowHTML = buildElement("div", { class: ["row"] });
  const cellHTML = buildElement()
=======
  posts.forEach(post => {
    console.log(buildPanel(post));
  });
}

function buildPanel({ id, description, code, title }) {
>>>>>>> buildposts
  const titleHTML = buildElement("h2", { innerText: title });
  const descHTML = buildElement("span", { innerText: description });
  const codeHTML = buildElement("code", { innerText: code });

<<<<<<< HEAD
  console.log(titleHTML);
}
/*
 *  object = {
 *    id : "...",
 *    class: ["...", "..."],
 *    properties: ["...", "..."],
 *    innerText: "...",
 *    children: ["...", "..."]
 *  }
 *
 *  for children, order matters! The first element should be at the top of the
 *  DOM
 */
function buildElement(type, features) {
  const el = document.createElement(type);

  if (features.id) {
    el.id = features.id;
  }

  if (features.class) {
    el.className = features.class.join(" ");
  }

  if (features.properties) {
    features.properties.forEach(property => {
      el.setProperty(property, properties[property]);
    });
  }

  if (features.innerText) {
    el.innerText = features.innerText;
  }

  if (features.children) {
    features.children.forEach(child => {
      el.appendChild(child);
    });
  }

  return el;
=======
  const cellHTML = buildElement("div", { class: [ "col", "m12" ], children: [titleHTML, descHTML, codeHTML]});

  const rowHTML = buildElement("div", { class: [ "row" ], children: [ cellHTML ]});

  return rowHTML;
>>>>>>> buildposts
}

module.exports = buildPosts;
