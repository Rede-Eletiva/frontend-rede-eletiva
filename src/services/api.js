// import 'dotenv/config'
import axios from 'axios';

export const API = axios.create({
    baseURL: "https://backend-rede-eletiva-ete.onrender.com/api/v1"
  });