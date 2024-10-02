import axios from 'axios';
import axiosRetry from 'axios-retry';

// Create Axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Retry failed requests up to 3 times
axiosRetry(api, { retries: 3 });

// Interceptor to add auth token to headers if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Error interceptor for global error handling
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      console.log('Unauthorized. Redirect to login.');
    } else if (error.response?.status === 500) {
      console.log('Server error. Please try again later.');
    }
    return Promise.reject(error);
  }
);

// GET request
export const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('GET API call failed:', error);
    throw error;
  }
};

// POST request
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('POST API call failed:', error);
    throw error;
  }
};

// PUT request
export const updateData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('PUT API call failed:', error);
    throw error;
  }
};

// DELETE request
export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('DELETE API call failed:', error);
    throw error;
  }
};

export default api;
