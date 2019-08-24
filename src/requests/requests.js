import axios from "axios"

 const baseRequest = axios.create({baseURL:"http://localhost:3001"})
export default baseRequest
