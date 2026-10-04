import { students } from "@/app/data/students"
export default async function StudentDetailedPage({params}:{params:
    Promise<{id:string}>
}){

    const id =(await params).id

    const student = students.find((student)=>(
        student.id === Number(id)
    ))

    if(!student){
        return (
            <div>Student {id} doesn't exist.</div>
        )
    }
    return(
        <div>
            <h1>STUDENT: {id}</h1>
            <h2>{student?.name}</h2>
            <h2>{student?.course}</h2>
            <h2>{student?.college}</h2>
        </div>
    )
}