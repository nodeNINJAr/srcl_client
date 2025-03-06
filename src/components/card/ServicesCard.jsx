import React from 'react'
import PropTypes from 'prop-types'
import {ArrowRightOutlined} from "@ant-design/icons"
import { Link } from 'react-router'

const ServicesCard = ({service}) => {
  return (
    <div className='relative rounded-lg group cursor-pointer'>
       <figure>
           <div className='bg-gray-700'></div>
          <img className='rounded-md w-full mx-auto object-cover' src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="services-img" />
       </figure>
       {/* content */}
         <div className='absolute left-0 bottom-0 p-4'>
            <h2 className='text-lg font-Poppins font-bold'>{service?.title}</h2>
            <p className='text-sm font-Varela font-medium'>{service?.short_desc}... <Link to={`/services/${service?._id}`}><span className='text-sm capitalize cursor-pointer flex justify-start items-center gap-1 text-blue-600'>learn more <ArrowRightOutlined /></span></Link></p>
         </div>
    </div>
  )
}
ServicesCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string,
    short_desc: PropTypes.string,
    _id: PropTypes.string
  })
}

export default ServicesCard;