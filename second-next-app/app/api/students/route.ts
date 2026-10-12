import { data } from "@/app/data/data"
import Students from "@/app/students/page";
import { NextResponse } from "next/server"
// export async function GET(){
//     return NextResponse.json(data)
// }

export async function POST(request: Request){

    const data = await request.json();
    return NextResponse.json({
        "message1":"POST ROUTE REQUEST",
        "message2":data
    })
}

export async function GET(request:Request){
    const {searchParams} = new URL(request.url)
    const course = searchParams.get("course") 
    const age = Number(searchParams.get("age"))
    
    const student = data.find((student)=>(
        (student.course === course) && (student.age === age)
    ))
    return NextResponse.json({
        "course":course,
        "age":age,
        "student":student
    })
}

