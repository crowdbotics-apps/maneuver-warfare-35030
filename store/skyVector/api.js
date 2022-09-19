import axios from "axios"
import { SKY_VECTOR_USERNAME, SKY_VECTOR_PASSWORD } from "react-native-dotenv"
const skyVector = axios.create({
  baseURL: "https://skyvector.com/",
  auth: { username: SKY_VECTOR_USERNAME, password: SKY_VECTOR_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
