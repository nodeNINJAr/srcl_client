import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

const useOurProjects = () => {
    const {data:projects=[] , isLoading, refetch } = useQuery({
        queryKey:['ourProjectsData'],
        queryFn:async()=>{
          const {data}= await axios.get('/ourProjects.json');
          return data
        }
    })
    
    //
      return [projects, isLoading,refetch]
    }
export default useOurProjects