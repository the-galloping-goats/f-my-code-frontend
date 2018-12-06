
function getCommentsHandler(e) {
 const button = e.target
 const cardPanel = button.parentElement
 const id = cardPanel.getAttribute("data-post-id")

 console.log("COMMENTS!!!")
}
function showCommentsBtn() {
  
}

module.exports = { getCommentsHandler, showCommentsBtn }
