import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

const useOurResources = () => {
    const {data:equipments=[] , isLoading, refetch } = useQuery({
        queryKey:['ourResource'],
        queryFn:async()=>{
          const {data}= await axios.get('/equipment.json');
          return data
        }
    })

    //
      return [equipments, isLoading,refetch]
    }
export default useOurResources