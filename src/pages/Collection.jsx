import React from 'react'
import { useContext, useState } from 'react'
import { ShopContext } from '../context/shopContext'

const Collection = () => {
  const { product } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm;gap-10 pt-10 border-t'>
      {/* Filter Option*/}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'} sm:block`}></div>
        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'></div>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Men'} /> <span>Men</span>
        </p>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Women'} /> <span>Women</span>
        </p>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Children'} /> <span>Children</span>
        </p>

      </div>

      
    </div>
  )
}

export default Collection
