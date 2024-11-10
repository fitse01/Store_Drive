import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
    return (
    <div>
        <h1 className='flex justify-center items-center text-3xl py-10'>Navbar Header</h1>
        {children}

    </div>
  )
}

export default layout