import axios from 'axios'

export default axios.create({
  baseURL: `http://${process.env.API_TARGET_URL}`
})