import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Student from "@/models/Student";

export async function GET(request:Request, {params}:{params:
    Promise <{id:string}>
    }){

    await connectDB()    
    const id = (await params).id
    
    const student = await Student.findById(id)

    if (!student){
        return NextResponse.json({
            message:"Student not found"
        },
        {
            status:404
        }
    )
    }
    return NextResponse.json(student,
        {
            status:200
        }
    )
}

export async function PATCH(request: Request, {params}:{params:
    Promise <{id:string}>
    }){
    
    await connectDB()  
    const id = (await params).id

    const body = await request.json()

    const student = await Student.findByIdAndUpdate(
        id,
        body,
        {
            new:true,
        }
    )

    if (!student){
        return NextResponse.json({
            message:"Student not found"
        },
        {
            status:404
        }
    )
    }

    return NextResponse.json({
        message:"Student updated",
        "student":student
    },
    {
        status:200
    }
)
}



export async function DELETE(request:Request, {params}:{params:
    Promise <{id:string}>
    }){

    await connectDB()    
    const id = (await params).id
    
    const student = await Student.findByIdAndDelete(id)

    if (!student){
        return NextResponse.json({
            message:"Student not found"
        },
        {
            status:404
        }
    )
    }
    return NextResponse.json(student,
        {
            status:200
        }
    )
}
