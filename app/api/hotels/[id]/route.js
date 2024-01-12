import mongoConnect from "@/libs/mongodb";
import hotelModel from "@/models/hotel.model";
import { NextResponse } from "next/server";
export async function GET(request) {
    try {
        mongoConnect();
    const { pathname } = new URL(request.url);
        const pathId = pathname.split("hotels/")[1];
        const data = await hotelModel.findById({_id :pathId});
        return NextResponse.json({msg:"data found",data},{status:200})
       } catch (error) {
        return NextResponse.json({msg:"data not found"},{status:404})
       }    
}
