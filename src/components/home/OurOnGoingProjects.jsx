import React from 'react'
import Heading from '../shared/heading/Heading'
import OurProjectCard from '../card/OurProjectCard'
import useOurProjects from '../hooks/useOurProjects'

// 
const OurOnGoingProjects = () => {
    const[ projects] = useOurProjects();


    //
   return (
    <>
    <Heading title1={"Our Ongoing"} title2={"Projects"} />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* card */}
      {projects?.slice(0, 8).map((project) => (
        <OurProjectCard key={project?.id} project={project} />
      ))}
    </div>
  </>
  )
}

export default OurOnGoingProjects