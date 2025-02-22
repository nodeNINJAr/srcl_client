import { Card } from 'antd'
import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

const OurProjectCard = ({project}) => {
  return (
    <Card
      className="p-1 w-full"
      cover={
        <figure className="overflow-hidden">
          <img
            className="w-full mx-auto rounded-lg hover:scale-110 transition-all ease-in-out overflow-hidden"
            alt={project?.title}
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </figure>
      }
    >
      {/* content */}
      <h2 className="text-left text-gray-700 capitalize text-sm font-medium py-1 rounded-b-lg">
            {project?.title}
          </h2>
      <p className="text-xs text-left py-2">
        {project?.description.substring(0, 150)}... <Link to={`services/${project?.id}`} className='text-blue-700 underline'>Readmore</Link>
      </p>
    </Card>
  )
}
OurProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
}

export default OurProjectCard
