import React from 'react'
import useOurServices from '../../components/hooks/useOurServices';
import ServicesCard from '../../components/card/ServicesCard';



// 
const Services = () => {
    const [services] = useOurServices();
    // 
  return (
    <div className='w-11/12 mx-auto py-20'>
    {/*  */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.length > 0 && (
        <>
          {services?.map((service) => (
            // <ServiceCard key={service?._id} service={service} />
            <ServicesCard key={service?._id} service={service} />
          ))}
        </>
      )}
    </div>
  </div>
  )
}

export default Services