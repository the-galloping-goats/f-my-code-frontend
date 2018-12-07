<<<<<<< HEAD
const buildPosts = require("./build-posts");
const server = require("./server")






function create() {

    const fingWork = document.getElementById('newPost')
    const title = document.querySelector("#titleEdit")
    const description = document.querySelector("#description")
    const code = document.querySelector("#code")

    fingWork.addEventListener('submit', (e) => {
        e.preventDefault()
       
        
        const newPost = {
            title: title.value,
            description: description.value,
            code: code.value
        }

        server.createPost(newPost)
            .then((res) => {
                console.log("I did it!");
                window.location.href = "http://127.0.0.1:8080/"
            })
            .catch(function (err) {
                document.querySelector('#error').classList.remove('hide-auth-error')
            })
    })
}

// function update() {

//     updatePost(this.getAttribute('data-post-id'), {
//         title: title.value,
//         content: content.value
//       }).then((res) => {

//         createPosts(newPost)
//             .then((res) => {
//                 window.location.replace("http://127.0.0.1:8080/")
//             })
//             .catch(function (err) {
//                 document.querySelector('#error').classList.remove('hide-auth-error')
//             })
//     })
// }

module.exports = { create  }
=======
function request(path, method = 'get', body = null) {
    let bearerToken = ''
    const token = localStorage.getItem('token')

    document.querySelector('#post').addEventListener('submit', function (event) {
        event.preventDefault()

        const title = event.target.title.value
        const description = event.target.description.value
        const code = event.target.code.value

        request('/posts', 'post', { title, description, code })
            .then(function (response) {
                document.querySelector('#error').classList.add('hide-auth-error')
                let token = localStorage.getIteLm('token')

                ///////////////////////////////////////////////////////////////////////////////////
                ////////////////////////// change current url to deployed login-url ///////////////
                ///////////////////////////////////////////////////////////////////////////////////

                if (!token) window.location.replace("http://f-my-code.com/login")
            })
            .catch(function (error) {
                document.querySelector('#error').classList.remove('hide-auth-error')
            })
        })
    }
>>>>>>> tidied up comments
