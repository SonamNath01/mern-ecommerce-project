import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets.js'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-grey'>
      
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Exchange Icon" />
        <p className='font-semibold'>Easy Exchange</p>
        <p className='text-grey-400'>We offer easy exchange policies for your convenience.</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Return Icon" />
        <p className='font-semibold'>Easy Returns</p>
        <p className='text-grey-400'>We offer hassle-free return policy for your convenience.</p>
      </div>

      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="Support Icon" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-grey-400'>We offer 24/7 customer support for your convenience.</p>
      </div>

    </div>
  )
}

export default OurPolicy
