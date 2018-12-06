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