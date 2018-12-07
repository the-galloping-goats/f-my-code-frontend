const axios = require("axios")
const server = require('./server.js')


// API Axios call
//const signup = (body) => axios.post(`${base}/users`, body)
// question: url/users/login or url/{$userID}/user
// eg const userId = localStorage.getItem('id')
console.log('test')

const errNotice = document.querySelector('.login-signup-error')


const errEvent = (errNotice, message, time) => {
    const errNotice = document.querySelector('.login-signup-error')
    errNotice.style.display = 'block'
    errNotice.innerHTML = message
    setTimeout(() => { errNotice.style.display = 'none' }, time)
  }

  const notify = (container, message, time) => {
    const notice = document.querySelector(container)
    notice.innerHTML = message
    notice.classList.remove('hidden')
    setTimeout(() => { notice.classList.add('hidden') }, time)
  }

  const submitBtn = document.querySelector('.submit')


  function addUser(){
  submitBtn.addEventListener('.submit', (event) => {
    event.preventDefault()
    const username = document.querySelector('.username-su')
    const email = document.querySelector('.email-su')
    const password = document.querySelector('.password-su')

    const newUser = {
      'username': username.value,
      'email': email.value,
      'password': password.value
    }

    server.createUser(newUser)
    .then ( () => {
      window.location = `/index.html`
    })
    .catch(error => errEvent('.notification', 'Email already exists!', 2000))

  })
  }

  module.exports = {
      addUser
  }














  /* const attachHeader = () => {
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
} */