"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
const Header3 = () => {
  const[city,setCity]=useState('')
  return (
    <div>
      <div className="bg-gradient-to-r from-red-600 to-red-400  h-60 w-full">
    <div className=" p-5">
        <h2 className='text-3xl font-bold text-center pt-5 text-white'>Over 157,000 hotels and homes across 35 countries</h2>
        <div className="grid grid-cols-12 place-content-center float-right  my-5 mx-20">
          
            <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} className='p-2 h-16 outline-none col-span-3  border-2 ' id="cityInput" placeholder='Search by city....' required
            />
            

<button type="submit" className='col-span-3 bg-green-500 hover:bg-green-500 hover:cursor-pointer text-xl text-white'><Link href={`/hotels?location=${city}`}>Search</Link>  </button>

   
        </div>
    </div>
      </div>
    </div>
  )
}

export default Header3