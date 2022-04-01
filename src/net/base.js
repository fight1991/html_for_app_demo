import axios from 'axios';
class Base {
  constructor (url) {
    this.url = url
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API,
      timeout: 15000
    })
  }
  get () {
    return this.instance.get(this.url)
  }
  post (params) {
    return this.instance.post(this.url, params)
  }
}
export default Base;
