import axios from 'axios'

export default function request(config) {

  const intence = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/wh',
    timeout: 5000
  })

  intence.interceptors.request.use(config => {
  // Do something before request is sent
  return config;
  },error => {
  // Do something with request error
  return Promise.reject(error);
  });

  intence.interceptors.response.use(response => {
  // Do something before response is sent
  return response.data;
  },error => {
  // Do something with response error
  return Promise.reject(error);
  });
  return intence(config)
}