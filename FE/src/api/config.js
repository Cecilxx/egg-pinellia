import axios from 'axios'

export default axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: '',
  transformResponse: [
    function(data) {
      const res = data && JSON.parse(data)
      const msg = res.msg || res.message
      const code = res.code

      if (code === 0) {
        return res
      } else {
        throw new Error(msg || '请求出错')
      }
    }
  ]
})
