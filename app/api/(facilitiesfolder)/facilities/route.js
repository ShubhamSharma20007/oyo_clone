import mongoConnect from "@/libs/mongodb";
import hotelModel from "@/models/hotel.model";
import { NextResponse } from "next/server";

export const GET = async(request) => {
    try {
        mongoConnect();
        const facilities = await hotelModel.find({}).distinct("facilities.name")
        return NextResponse.json({ message: "data", facilities }, { status: 200 });
    } catch (error) {

        return NextResponse.json({ message: "Error adding hotel", error }, { status: 500 });
    }
};