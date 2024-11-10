import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <h1 className='flex justify-center items-center text-3xl py-10'>this is dashboard layout </h1>
        {children}
    </div>
  )
}

export default layout