const axios = require("axios");
const buildElement = require("./utils");


function buildComments (comments) {
  console.log(comments)

postMessage.forEach(comment => {
  console.log(buildComPanel(comment))
});
}

function buildComPanel({id, username, comment})
const userHTML = buildElement("h4", { innerText: username })
const commHTML = buildElement("span", { innerText: description })




