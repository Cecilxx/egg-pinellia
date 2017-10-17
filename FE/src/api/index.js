import axios from './config'

const login = data => {
  return axios.post('/login', data)
}

const register = data => {
  return axios.post('/register', data)
}

const importBook = data => {
  return axios.post('/importbook', data)
}

const getBookList = data => {
  return axios.get('/booklist')
}

export default {
  login,
  register,
  importBook,
  getBookList
}
