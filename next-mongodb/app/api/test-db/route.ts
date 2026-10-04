import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Student from "@/models/Student";

export async function GET(){
    connectDB();

    const students = await Student.find();
    return NextResponse.json(students,
        {
            status:200
        })
}

export async function POST(request: Request){
    connectDB();

    const body = await request.json()

    const student = await Student.create(body)
    return NextResponse.json({
        "message":"Data inserted!",
        "student":student
    },
    {
        status:201
    }
)
}