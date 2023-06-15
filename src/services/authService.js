import axios from "axios"
import { config } from "../config"

const loginService = async (data) => {
  try{
    const response = axios.post(config.baseUrl, data)
    if (response.error){
      return response.message
    }
    return response
  }
  catch(error){
    return error.message
  }
}

export default loginService