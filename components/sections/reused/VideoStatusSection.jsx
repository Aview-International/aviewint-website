import React from 'react'
import HorizontalLine from '../../UI/HorizontalLine';

const VideoStatusSection = ({ children, title, hasHorizontal=true }) => {
  return (
    <div className='flex flex-col items-start justify-between w-full'>
      <h2 className='uppercase text-sm'>{title}</h2>
      {children}
      { hasHorizontal && <HorizontalLine styles={"mt-1 h-[2px] bg-gray-2"}/> }
    </div>
  )
}

export default VideoStatusSection