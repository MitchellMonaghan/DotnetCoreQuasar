import axios from 'axios'

export default ({ Vue }) => {
  axios.defaults.baseURL = '/api'
  Vue.prototype.$axios = axios
}
