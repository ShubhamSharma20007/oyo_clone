"use client"
import React, { useEffect } from 'react'
import axios from 'axios'
import style from "@/app/module.css/button.module.css"



const Fillter = ({price,setPrice,handlePrice,checklist,setChecklist}) => {
  const [facilities,setFacilities]=React.useState([])

  const fetchData =async()=>{
    const res =await axios("/api/facilities")
    const data =  await res.data;
    setFacilities(data?.facilities || null)
  }
useEffect(()=>{
  fetchData()
},[])
  return (
    <div>
      <div className="border  rounded-md h-auto p-5 ">
       <div className="flex align-items justify-start gap-2">
       <label htmlFor="price" className='text-sm pr-2 font-semibold'>Price</label>
    <input type="range" name="price" id="price" className='m-0 ' onChange={(e)=> setPrice(e.target.value)} defaultValue={price ? price :0} min={0} step={100}  max={2000} />
    <p className='text-sm pr-2 font-semibold '>{price ? `₹${price}` :""}</p>
       </div>
       <button className={`${style.button6}`} onClick={handlePrice} style={{margin:'20px 0'}}> search</button>

    <p className='text-md pr-2 font-semibold my-2'>Fillter By Facilities :</p>
      {
        facilities && facilities.map(item=>(
          <React.Fragment  key={item._id}>
    <div className="flex justify-between items-center gap-2 w-3/4 ">
          <label htmlFor="checkbox1" className='text-sm pr-2  my-1'>{item}</label>
          <input type="checkbox" value={checklist}  name="checkbox1" id="checkbox1" onChange={(e)=>setChecklist(e.target.value)}  />
          </div>

          </React.Fragment>
        ))
      }
     
      </div>

      
    </div>
  )
}

export default Fillter
