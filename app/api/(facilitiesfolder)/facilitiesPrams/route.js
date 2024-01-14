import mongoConnect from "@/libs/mongodb";
import hotelModel from "@/models/hotel.model";
import { NextResponse } from "next/server";

export const GET = async(request) => {
    try {
        mongoConnect();
        const { searchParams } = request.nextUrl;
        const name = searchParams.get("query");
        const hotels = (await hotelModel.find({ 'facilities.name': { $in: name } })).length
        return NextResponse.json({ message: "data", hotels }, { status: 200 });
    } catch (error) {

        return NextResponse.json({ message: "Error adding hotel", error }, { status: 500 });
    }
};