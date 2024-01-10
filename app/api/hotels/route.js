import mongoConnect from "@/libs/mongodb";
import hotelModel from "@/models/hotel.model";
import { NextResponse } from "next/server";


export const GET = async(request) => {
    try {
        mongoConnect();
        const { location } = await request.json()
        const hotel = await hotelModel.find({ location });
        return NextResponse.json({ message: "Hotel data", hotel }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error adding hotel", error }, { status: 500 });
    }
};