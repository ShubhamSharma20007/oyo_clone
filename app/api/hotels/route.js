import mongoConnect from "@/libs/mongodb";
import hotelModel from "@/models/hotel.model";
import { NextResponse } from "next/server";


export const GET = async(request) => {
    try {
        mongoConnect();
        const { searchParams } = new URL(request.url);
        const location = searchParams.get("location");

        const hotel = await hotelModel.find({ location });
        return NextResponse.json({ message: "Hotel data", hotel, params: { location } }, { status: 200 });
    } catch (error) {

        return NextResponse.json({ message: "Error adding hotel", error }, { status: 500 });
    }
};