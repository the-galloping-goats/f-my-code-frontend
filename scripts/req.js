const baseURL = `https://f-my-code.herokuapp.com/`;

// API Axios calls

const loginReq = (body) => axios.post(`${baseURL}/users/login`, body);
const getID = () => axios.get(`${base}/login`, attachHeader())
// question: url/users/login or url/{$userID}/login
// eg const userId = localStorage.getItem('id')

const errEvent = (errNotice1, message, time) => {
    const errNotice1 = document.querySelector('.login-signup-error')
    errNotice1.style.display = 'block'
    errNotice1.innerHTML = message
    setTimeout(() => { errNotice1.style.display = 'none' }, time)
  }

const initialize = () => {
    document.querySelector('.container').addEventListener('submit', (event) => {
        event.preventdefault()
        const credentials = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        loginReq(credentials)
        .then(res => {
            localStorage.setItem('token', response.data.token)
            return getID()
        })
        .then(res => {
            console.log(res)
            localStorage.setItem('id', reponse.data.id)
            window.location = `/index.html`
        })
        .catch(error => errEvent('.login-signup-error', 'Could not log in', 2500))
    })
}





/*  function loginUser (email, password) {
    request.loginRequest({
        email,
        password
    })
    .then(response => {
        const token = response.data.token
        localStorage.setItem('token', token)
        localStorage.setItem('id', id)
        document.location.replace("../index.html")

    })
    .catch(error => {
        errEvent('.notification', 'Invalid login attempt', 2500)
    })
}
*/



const attachHeader = () => {
  let bearer = ''
  const token = localStorage.getItem('token')
  if (token) bearer = `Bearer ${token}`

  return {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': bearer
    }
  }
}


