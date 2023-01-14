import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const client = axios.create({
  baseURL: BASE_URL,
});

export default client;
