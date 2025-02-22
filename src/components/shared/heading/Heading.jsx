import React from 'react'

const Heading = ({title1,title2}) => {
  return (
    <div className='py-10'>
        <h1 className='text-4xl font-semibold capitalize text-center'>{title1} <strong>{title2}</strong></h1>
    </div>
  )
}

export default Heading