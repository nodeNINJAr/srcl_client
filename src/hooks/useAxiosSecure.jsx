import axios from 'axios';
import React from 'react'

const useAxiosSecure = () => {
   const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials:true,
  });


  // 
  return axiosSecure;
}

export default useAxiosSecure;