import { Spin } from 'antd'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'><Spin size='large'/></div>
  )
}

export default Loader