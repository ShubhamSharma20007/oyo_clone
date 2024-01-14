"use client"
import axios from "axios";
import Header from "@/components/Header";
import Hotel from "@/components/Hotel";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import Fillter from "@/components/Fillter";
import React from "react";

const Page = () => {
  const auth =  Cookies.get("token") || null;
  const search = useSearchParams();
  const [hoteldata, setHotelData] = useState([]);
  const[price,setPrice] = useState()
  const[list,setList]= useState([])
  const[checklist,setChecklist]= useState([])
const params = search.get("location")
  const fetchData = async () => {
    try {
      const res = await axios.get(`/api/hotels?location=${params}`);
      const data = res.data;
      console.log(data)
      if (data.hotel && res.status === 200) {
        setHotelData(data.hotel);
      } else {
        console.log("hotel API fetching error");
      }
    } catch (error) {
      console.error("Error fetching hotel data:", error);
    }
  };

  useEffect(()=>{
    fetchData()
  },[])

  const  handlePrice =async()=>{
      const response = await axios.get(`api/filterange?range=${price}`)
      const filterPrice = response.data;
      setList(filterPrice?.facilities)
  }
  return (
    <div>
      <Header  auth={auth}/>
      <div className="grid grid-cols-12">
        <div className="col-span-2 mt-8">
          <Fillter checklist={checklist} setChecklist={setChecklist} price={price} setPrice={setPrice} handlePrice={handlePrice}></Fillter>
          
        </div>
        <div className="col-span-10">
     {
      list.length >0 ? list.map(item=>{
        return(
          <React.Fragment key={item._id}>
              <div className=" " key={item._id}>
               <Hotel item ={item} />
             </div>

          </React.Fragment>
        )
      }): 
        // it's mean data should't null,undefined if not this i would be run 
          hoteldata && hoteldata.map(item=>{
            return(
             <div className=" " key={item._id}>
               <Hotel item ={item} />
             </div>
            )
          })
        }
     
      </div>
      </div>
    </div>
  );
};


export default Page;
