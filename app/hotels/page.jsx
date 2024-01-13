"use client"
import axios from "axios";
import Header from "@/components/Header";
import Hotel from "@/components/Hotel";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import Fillter from "@/components/Fillter";

const Page = () => {
  const auth =  Cookies.get("token") || null;
  const search = useSearchParams();
  const [hoteldata, setHotelData] = useState([]);
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
  return (
    <div>
      <Header  auth={auth}/>
      <div className="grid grid-cols-12">
        <div className="col-span-2 mt-8">
          <Fillter></Fillter>
        </div>
        <div className="col-span-10">
      { 
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
