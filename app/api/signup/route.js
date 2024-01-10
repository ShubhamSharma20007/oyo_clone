import { NextResponse } from "next/server";
import mongoConnect from "@/libs/mongodb";
import model from "@/models/user.model";
import bcrypt from "bcrypt";
export async function POST(req, res) {
    try {
        const { name, email, password } = await req.json(); // gettin the body data
        await mongoConnect();
        // check the empty field or not
        if (!name || !email || !password) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }
        // check if the user already exists
        const userExists = await model.findOne({ email });
        if (userExists) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }
        // hashing the password
        const bcryptPass = await bcrypt.hash(password, 10);
        const userStore = await model.create({
            name,
            email,
            password: bcryptPass,
        });
        await userStore.save()
        return NextResponse.json({ message: "user created successfully", userStore }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "user not created" }, { status: 400 });

    }
}