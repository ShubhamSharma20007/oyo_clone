"use client"
import axios from "axios";
import Header from "@/components/Header";
import Hotel from "@/components/Hotel";
import { useEffect } from "react";
import { useState } from "react";



const Page = () => {
  const [query, setQuery] = useState("");
  const [hoteldata, setHotelData] = useState([]);
console.log(query)
  const fetchData = async () => {
    try {
      const res = await axios.get(`/api/hotels?location=${query}`);
      const data = res.data;
      setQuery(data?.params?.location || "");
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
      <Header />
      { 
      // it's mean data should't null,undefined if not this i would be run 
        hoteldata && hoteldata.map(item=>{
          return(
           <div className="" key={item._id}>
             <Hotel item ={item} />
           </div>
          )
        })
      }

    </div>
  );
};


export default Page;
