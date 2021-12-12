import axios from "axios"

const axiosInstance = axios.create({ baseURL: 'http://localhost:81/' })

const api = {
  getProducts: () => {
    return axiosInstance.get('products')
  },
  getProduct: (id) => {
    return axiosInstance.get(`product/${id}`)
  },
  addToCart: (id, data) => {
    return axiosInstance.post(`addToCart/${id}`, data)
  },
  checkout: (data) => {
    return axiosInstance.get('checkout', data)
  },
  
}

window.api = api
export default api
