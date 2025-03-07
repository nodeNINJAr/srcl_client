import React from 'react'
import { Outlet } from 'react-router'


// 
const OurProjects = () => {
  // 
  return (
    <div className='w-11/12 mx-auto'>
        {/* main */}
        <main>
           <Outlet/>
        </main>
    </div>
  )
}

export default OurProjects