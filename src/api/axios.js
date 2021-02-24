import axios from 'axios'
const axiosInit = axios.create({
  baseURL: 'https://ecommerce-dody.herokuapp.com'
  // baseURL: 'http://localhost:3000'
})

export default axiosInit
