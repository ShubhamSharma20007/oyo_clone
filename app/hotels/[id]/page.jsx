"use client"
import Header from "@/components/Header"
import Image from "next/image"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import style from "@/app/module.css/button.module.css"
import Cookies from "js-cookie"
const page = ({params}) => {

  const endPoint = params.id;
  const [auth,setauth]= useState('')
  const[idBaseData,setIdBaseData]= useState('')

  const fetchData = async () => {
    const res = await axios.get(`/api/hotels/${endPoint}`)
    const data =  await res.data;
    
    setIdBaseData(data.data);
  }

  console.log(idBaseData);
  useEffect(()=>{
    fetchData()
    setauth( Cookies.get('token'))
  },[])




  return (
    <div>
      <Header auth={auth}></Header>
      <div className="w-full">
      <center><Image src={idBaseData.banner} height={500} width={500} className="w-1/2  h-large-box mr-3 my-5 object-contain" /></center>

      <div className="mx-20">
        <h3 className="text-3xl font-bold">
          {idBaseData.name}
        </h3>
        <p className="text-xl my-5">{idBaseData.description}</p>
        <button type="submit" style={{marginRight:'20px'}} className={`mx-3 ${style.button6}`}>Price :₹{idBaseData.price}</button>
        
        {
          auth ? <button className={style.button6} style={{background:'#ff000087'}}>Book Order</button> :<p className="inline-block text-md font-semibold  text-red-400"><Link href={"/login"}>need to login firstly for booking</Link></p>
        }

      </div>
      <div className="mx-20 my-5">
      {
          idBaseData && idBaseData.facilities.map(fac=>(
            <>
              <div className="parent inline-flex justify-center my-3 px-3 items-center gap-5"  key={fac._id}>
            <div className="flex w-10 h-10">
              <Image height={40} width={40} src={fac.img} className="w-full h-full" alt="icons"></Image>
         </div>
               <li className="text-md list-none  font-semibold ">{fac.name}</li>
         </div>
            </>
          ))
         }
    
      </div>

        </div> 
    </div>
  )
}

export default page
