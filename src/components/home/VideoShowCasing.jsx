import React from 'react'
import Heading from '../shared/heading/Heading'

const VideoShowCasing = () => {
  return (
    <div className='w-11/12 mx-auto pb-20'>
        <Heading title1={"Working experiance of"} title2={'SRCL'}/>
        {/*  */}
        <iframe className='w-full h-60 sm:h-64 md:h-96 mx-auto rounded-xl' src="https://www.youtube.com/embed/9ommThkaIII?si=tpOU70Yud6obiJT2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoShowCasing