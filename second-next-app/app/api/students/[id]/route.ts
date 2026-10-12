import { data } from "@/app/data/data"
import { NextResponse } from "next/server"
export async function GET(request:Request,{params}:{params:
     Promise <{id:string}>
    }){

    const id = (await params).id

    const student = data.find((student)=>(
        student.id === Number(id)
    ))
    return NextResponse.json(student)
}

export async function PATCH(request:Request,{params}: {params: 
    Promise<{id:string}>
}){
    const id =(await params).id

    const body = await request.json()

    const student = data.find((student)=>(
        student.id === Number(id)
    ))

    if(!student){
        return NextResponse.json({
            "message":"student not found"
        })
    }

    Object.assign(student,body)

    return NextResponse.json({
        "message":"Object updated",
        "data":student
    })
}