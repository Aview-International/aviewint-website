import React from 'react'

const ComingSoon = ( { children, stage }) => {
  return (
    <>
      <div className='relative rounded-2xl border-slate-100 cursor-not-allowed'>
       {children}
       <div className={`absolute inset-0 ${stage && 'bg-black/70'} bg-black/70 z-50 ${stage==1 && 'font-bold text-center text-2xl flex justify-center items-center'}`}>{ stage==1 ? 'Coming Soon' : '' }</div>
      </div>
      
    </>
  )
}

export default ComingSoon
