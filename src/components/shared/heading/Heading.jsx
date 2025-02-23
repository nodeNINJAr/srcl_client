import React from 'react'

const Heading = ({title1,title2}) => {
  return (
    <div className='py-10'>
        <h1 className='text-4xl font-semibold capitalize text-center font-roboto text-gray-600'>{title1} <strong className='text-black'>{title2}</strong></h1>
    </div>
  )
}

export default Heading