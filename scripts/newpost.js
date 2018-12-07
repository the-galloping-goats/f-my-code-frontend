const buildPosts = require("./build-posts");
const server = "https://f-my-code.herokuapp.com";


function create() {

    document.querySelector('#post').addEventListener('submit', (e) => {
        event.preventDefault()

        const newPost = {
            title = event.target.title.value,
            description = event.target.description.value,
            code = event.target.code.value
        }

        createPosts(newPost)
            .then((res) => {
                window.location.replace("http://f-my-code.com/")
            })
            .catch(function (error) {
                document.querySelector('#error').classList.remove('hide-auth-error')
            })
    })
}

function updatePost(e) {
    // const titleHeader = document.querySelector('.titleEdit')
    // const contentBody = document.querySelector('.message-body')
    // const title = document.querySelector('#title')


    update(this.getAttribute('data-post-id'), {
        title: title.value,
        content: content.value
      }).then((res) => {

        createPosts(newPost)
            .then((res) => {
                window.location.replace("http://f-my-code.com/")
            })
            .catch(function (error) {
                document.querySelector('#error').classList.remove('hide-auth-error')
            })
    })
}