import React from 'react'
import Image from 'next/image';

const WaitlistImages = ({ image }) => {
    return (
      <>
        <div className='w-full h-full md:w-[560px] md:h-[340px] relative cursor-pointer'>
          <Image src={image} alt='waitlist-image' className='object-cover rounded-md'/>
          <div className={`gradient-2 transition-300 absolute left-1/2 top-[55%] -z-10 h-[104%] w-[104%] -translate-x-1/2 -translate-y-1/2 rounded-2xl blur-2xl md:blur-3xl opacity-70 md:opacity-95`}
          ></div>
        </div>
      </>
    )
  }

export default WaitlistImages
