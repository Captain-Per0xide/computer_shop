
import Image from 'next/image'
import React from 'react'

const MyAccount = () => {
  return (
<div className='flex items-center justify-center gap-1.5'>
  <Image
    src="/user.jpg"
    alt="User Avatar"
    width={1024}
    height={1024}
    className='border-2 rounded-xl object-cover w-10 h-10'
  />
  <div className='hidden md:flex flex-col items-center justify-center'>
    <p className='text-[13px]'>Welcome,</p>
    <p className='text-xl md:text-2xl font-bold'>Ranju</p>
  </div>
</div>


  )
}

export default MyAccount