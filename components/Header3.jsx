"use client"
import Link from "next/link"
import { useState } from "react"
const Header3 = () => {
  const[city,setCity]=useState('')
  return (
    <div>
      <div className="bg-gradient-to-r from-red-600 to-red-400  h-60 w-full">
    <div className=" p-5">
        <h2 className='text-3xl font-bold text-center pt-5 text-white'>Over 157,000 hotels and homes across 35 countries</h2>
        <div className="grid grid-cols-5  my-5 mx-20">
            <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} className=' h-16 outline-none col-span-2  border-2 ' placeholder='Search by city, hotel, or neighborhood' />
            <input type="date" className=' h-16 outline-none col-span-1 border-2 ' placeholder='' />
            <input type="text" className=' h-16 outline-none col-span-1 border-2 ' placeholder='1 Room, 1 Guest' />

<button type="submit" className='col-span-1 bg-green-500 hover:bg-green-500 hover:cursor-pointer text-xl text-white'><Link href={`/hotels?location=${city}`}>Search</Link>  </button>

   
        </div>
    </div>
      </div>
    </div>
  )
}

export default Header3
