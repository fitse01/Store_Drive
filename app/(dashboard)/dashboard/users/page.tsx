import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1 className='flex justify-center items-center text-3xl'>This is user dashboard used to display Users </h1>
            <li className='flex justify-center items-center text-3xl py-8'>
                <Link href='/dashboard/users/1' >Users 1</Link>
            </li>
            <li className='flex justify-center items-center text-3xl py-8'>
                <Link href='/dashboard/users/2' >Users 2</Link>
            </li>
            <li className='flex justify-center items-center text-3xl py-8'>
                <Link href='/dashboard/users/3' >Users 3</Link>
            </li>
            <li className='flex justify-center items-center text-3xl py-8'>
                <Link href='/dashboard/users/4' >Users 4</Link>
            </li>
    </div>
  )
}

export default page