import React from 'react'
import emptyList from './assets/emptyList.png'

const EmptyList = () => {
  return (
    <div className='hidden last:flex flex-col'>
        <div className='flex size-[70%] mx-auto'>
            <img src={emptyList} className=' size-[50%] -rotate-12 translate-x-14 -translate-y-5' />
            <img src={emptyList} className=' size-[50%] z-10 -translate-x-11' />
        </div>
        <p className='text-center pt-1 font-semibold'>There is no List</p>
    </div>
  )
}

export default EmptyList