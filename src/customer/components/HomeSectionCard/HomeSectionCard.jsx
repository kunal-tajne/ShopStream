import React from 'react'

export const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
        
    <div className='h-[13rem] w-[10rem]'>
        <img className="object-cover object-top w-full h-full" src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/ccebd3fc-3628-4eb5-9604-5487049c2cff1691142886405-image_png356438875.png" alt=""/>

    </div>

    <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>Gucci</h3>
        <p className='mt-2 text-sm text-gray-500'>Men Solid printed shirt</p>

    </div>

    </div>
  )
}
