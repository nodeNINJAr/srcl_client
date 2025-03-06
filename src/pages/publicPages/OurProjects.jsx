import React from 'react'
import { Outlet } from 'react-router'

const OurProjects = () => {
  return (
    <div>OurProjects
        {/* main */}
        <main>
           <Outlet/>
        </main>
    </div>
  )
}

export default OurProjects