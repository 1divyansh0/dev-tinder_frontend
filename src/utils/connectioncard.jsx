import React, { useEffect } from 'react'

const connectioncard = ({data}) => {
    
  return (
 <div className="card bg-primary text-primary-content w-96">
  <div className="card-body">
    <h2 className="card-title"></h2>
    <div className='flex gap-6'>
      <img src={data?.dp} className='w-15 h-15 rounded' alt="" />
    <div className='flex-col'>
      <h1 className='font-semibold'>{data?.firstname+" "+data?.lastname}</h1>
      <p>{data?.About}</p>
      <p>{data?.gender}</p>
    </div>
    </div>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  )
}

export default connectioncard