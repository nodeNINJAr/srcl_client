import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

const useOurServices = () => {

const {data:services=[] , isLoading, refetch } = useQuery({
    queryKey:['servicesData'],
    enabled:true,
    queryFn:async()=>{
      const {data}= await axios('/services.json');
      return data
    }
})

//
  return [services, isLoading,refetch]
}

export default useOurServices