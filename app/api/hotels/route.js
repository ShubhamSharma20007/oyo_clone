import mongoConnect from "@/libs/mongodb";
import hotelModel from "@/models/hotel.model";
import { NextResponse } from "next/server";



export const GET = async(request) => {
    try {
        mongoConnect();
        const { searchParams } = new URL(request.url);
        const location = searchParams.get("location");
        let hotel 
        if(!location){
             hotel = await hotelModel.find()
             return NextResponse.json({ message: "Hotel data", hotel}, { status: 200 });
        }
         hotel = await hotelModel.find({ location });
      
        
        return NextResponse.json({ message: "Hotel data", hotel}, { status: 200 });
    } catch (error) {

        return NextResponse.json({ message: "Error adding hotel", error }, { status: 500 });
    }
};