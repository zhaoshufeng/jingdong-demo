import axios from 'axios'
axios.defaults.baseURL = 'https://www.fastmock.site/mock/1a9d4f29d0db255d85a90bccec8fd713/api'

export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
