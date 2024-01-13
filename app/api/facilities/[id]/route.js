import mongoConnect from "@/libs/mongodb"
import hotelModel from "@/models/hotel.model"
import { NextResponse } from "next/server"
export async function GET(request){
    // const searchParams = request.nextUrl.searchParams
    const {searchParams} = new URL(request.url);
    const query = searchParams.getAll("query");
    const hotel = await hotelModel.find({"facilities.name":{$in:query}})
    return NextResponse.json({message:"Hello World",hotel},query)
}