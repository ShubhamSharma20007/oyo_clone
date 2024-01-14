"use client"
import React from 'react'
import style from "@/app/login.module.css"
import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'




const Login = () => {
  const router = useRouter()
  const[item,setItem] =useState({
    email:"",
    password:""
  })



 const handleSubmit = async(e)=>{

  e.preventDefault()
  try {
    const res  = await axios.post("/api/login",{
      email:item.email,
      password:item.password
    })
    console.log(res)
    if(res?.data){
      const token = res.data.token || "no key found";
      Cookies.set('token',token,{expires:7})

     
      alert(res.data.message)
      router.push("/")
    }
    if(res.status === 201){
      setItem({email:'',password:''})
    }
  } catch (error) {
    console.log(error)
  }
 }

  const handleChange=(e)=>{
  return setItem(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  return (
    <div>
      <div className={`w-full min-h-screen ${style.loginMain}`}>
        <div className="section h-20 p-5  flex gap-5 items-center">
         <svg width="101" height="49" viewBox="0 0 81 29" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_8885_44)"> <path d="M26.629 3H35.9291L40.6402 10.7742L45.1837 3H54.3952L44.6704 19.6397V29.0012H36.7332V19.674L26.629 3ZM65.5056 28.9954C58.3822 28.9954 52.6076 23.1761 52.6076 15.9977C52.6076 8.81926 58.3822 3 65.5056 3C72.6289 3 78.4036 8.81926 78.4036 15.9977C78.4036 23.1761 72.6289 28.9954 65.5056 28.9954ZM65.5056 20.9968C68.2453 20.9968 70.4663 18.7586 70.4663 15.9977C70.4663 13.2368 68.2453 10.9986 65.5056 10.9986C62.7658 10.9986 60.5448 13.2368 60.5448 15.9977C60.5448 18.7586 62.7658 20.9968 65.5056 20.9968ZM15.898 28.9954C8.77462 28.9954 3 23.1761 3 15.9977C3 8.81926 8.77462 3 15.898 3C23.0213 3 28.796 8.81926 28.796 15.9977C28.796 23.1761 23.0213 28.9954 15.898 28.9954ZM15.898 20.9968C18.6377 20.9968 20.8587 18.7586 20.8587 15.9977C20.8587 13.2368 18.6377 10.9986 15.898 10.9986C13.1582 10.9986 10.9372 13.2368 10.9372 15.9977C10.9372 18.7586 13.1582 20.9968 15.898 20.9968Z" fill="#EE2E24"></path> <path d="M3.80849 11.0107C3.45892 11.1982 4.6117 10.7221 4.42252 10.3717C4.23332 10.0213 3.89212 10.8948 4.24167 10.7073C5.63351 9.96156 7.01043 8.89991 8.19949 7.66413C9.34466 6.47387 10.3115 5.12621 10.9438 3.74929C11.109 3.38861 10.057 3.4307 10.4185 3.59765C10.7801 3.76459 10.8156 3.51803 11.2864 3.63439C11.3752 5.00872 10.841 6.99784 9.23788 8.66399C7.94599 10.0067 5.61396 11.2711 3.80849 11.0107Z" fill="black" fill-opacity="0.2"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.485 3.70199C9.09803 6.00726 6.17904 8.70871 3.37419 10.3525L1.53452 1.25727L10.485 3.70199Z" fill="#FFDB56"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4851 3.70197C10.1693 4.22676 9.77393 4.77214 9.31879 5.32087L1.94333 3.27829L1.53453 1.25725L10.4851 3.70197Z" fill="#F6C134"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67948 6.91714L2.31264 5.10362C2.95178 4.04469 3.4952 3.03158 4.04641 1.94328L4.1649 1.97564L5.25508 2.29359C4.64333 3.85589 3.74858 5.394 2.67948 6.91714ZM7.04964 2.76356L7.29993 2.83189C6.34112 5.50567 4.94416 7.83255 3.27788 9.8411L2.91945 8.09297C4.14987 6.43553 5.25489 4.63388 6.07877 2.50924L7.04964 2.76356ZM8.12105 3.0562L8.22691 3.08509L9.31467 3.38703C9.08815 4.09706 8.85108 4.73438 8.60464 5.30729C8.3349 5.93435 8.07365 6.50515 7.78306 6.98876C6.66133 8.07718 5.54282 8.97309 4.48035 9.64907C5.95654 7.76559 7.20293 5.56707 8.12105 3.0562Z" fill="#8055C3"></path> <path d="M3.87964 11.4045C3.52594 11.5721 3.1031 11.4211 2.93525 11.0673C2.76739 10.7135 2.91809 10.2907 3.27177 10.1231C4.68001 9.45646 6.09006 8.47832 7.32436 7.31984C8.51311 6.20402 9.53458 4.92477 10.2285 3.60063C10.4099 3.25375 10.8382 3.11981 11.1852 3.30145C11.5322 3.48309 11.6664 3.91155 11.485 4.25841C10.7168 5.72442 9.5947 7.13241 8.29381 8.35348C6.95275 9.61222 5.41689 10.6768 3.87964 11.4045Z" fill="#8055C3"></path> <path d="M2.37492 2.22049C2.80135 1.82054 2.8226 1.15038 2.42238 0.723654C2.02216 0.296927 1.35201 0.275222 0.925577 0.675175C0.499139 1.07513 0.477888 1.74528 0.878112 2.17201C1.27834 2.59874 1.94848 2.62044 2.37492 2.22049Z" fill="#6B44A5"></path> <path d="M0.929919 0.671219L0.925578 0.675185C0.499137 1.07514 0.477886 1.74529 0.878112 2.17202C1.01383 2.31717 1.18779 2.42104 1.37992 2.47163C1.46887 2.43036 1.55282 2.37446 1.62824 2.30372C2.00864 1.94695 2.02759 1.34911 1.67057 0.96844C1.47192 0.756636 1.19872 0.656758 0.929919 0.671219Z" fill="#8055C3"></path> </g> <defs> <clipPath id="clip0_8885_44"> <rect width="81" height="29" fill="white"></rect> </clipPath> </defs> </svg>
        <p className='text-dark font-semibold text-xl text-white'>Hotels and homes across 800 cities, 24+ countries</p>
        </div>
        <div className="para-section flex justify-center items-center flex-wrap w-full">
        <div className="  w-1/2 flex justify-center items-center min-h-screen">
          <div className="inner max-w-96 ">
            <h1 className='text-6xl text-white font-bold'>There’s a smarter way to OYO around</h1>
            <p className='text-white text-lg font-normal'>Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners.</p>
          </div>
        </div>
  <div className="  w-1/2">
    <div className="inner w-[80%]">
     <form onSubmit={handleSubmit}>
     <div className="w-full h-full py-3 px-5 rounded-md bg-white">
        <h1 className='text-4xl font-semibold my-3 '>Login / Signup</h1>
        <p className='text-md  font-normal'>Please enter your phone number to continue</p>
        
        <input type="email" className='border p-2 w-full my-3 outline-none' placeholder='Email...' name="email" id="email"  required value={item.email} onChange={handleChange} />
        <input type="password" className='border p-2 w-full my-3 outline-none' placeholder='Password...' name="password" id="password" required value={item.password} onChange={handleChange} />

        <button type="submit" className='w-2/4 py-3 my-3 rounded-md text-white font-semibold bg-red-500'>Login</button>
         
        <p className='font-semibold py-3 '>Go For Register <Link href={"/signup"} className='font-semibold text-red-600'>Click here </Link></p>
      </div>
     </form>
    </div>

  </div>
        </div>
      </div>
    </div>
  )
}

export default Login
