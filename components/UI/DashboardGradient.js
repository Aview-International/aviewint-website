import React from 'react'

const DashboardGradient = ({ children }) => {
  return (
    <div className="relative">
      <div className='absolute inset-0  w-full h-full -z-20'>
        <div className='gradient-3 fixed w-2/4 h-2/4 rounded-t-[3400px] rounded-b-[3400px] blur-3xl -top-20 left-[75rem]'></div>
        <div className='gradient-3 fixed w-2/5 h-2/6 rounded-t-[3400px] rounded-b-[3400px] blur-3xl top-40 left-60'></div>
        <div className='gradient-3 fixed w-1/4 h-2/6 rounded-t-[3400px] rounded-b-[3400px] blur-3xl -bottom-12 -left-24'></div>  
        <div className='gradient-3 fixed w-1/3 h-2/6 rounded-t-[3400px] rounded-b-[3400px] blur-3xl -bottom-28 left-[65rem]'></div>  
      </div>
      {children}
   </div>
  )
}

export default DashboardGradient
