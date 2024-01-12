import mongoConnect from "@/libs/mongodb";
import model from "@/models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";



export async function POST(req, res) {
    try {
        const { email, password } = await req.json()
        mongoConnect();
        const user = await model.findOne({ email })
        if (!user) {
            return NextResponse.json({ message: "user not found" }, { status: 404 })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return NextResponse.json({ message: "password not match" }, { status: 401 })
        }
        // creating json token 

        const token = jwt.sign({ id: user.Id }, process.env.JWT_SECRET, {
            expiresIn: "30d"
        })


        return NextResponse.json({ message: "user login sucessfully", token }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "internal server error" }, { status: 500 })
    }
}