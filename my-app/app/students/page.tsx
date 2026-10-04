type StudentProps = {
    id:number,
    name:string,
    age:number,
    course:string,
    college:string
}
import Link from "next/link"
import { students } from "@/app/data/students"
export default function Students(){
    return(
        <div>
            <h2>STUDENTS:</h2>
            <div>
                {
                    students.map((student:StudentProps)=>(
                      <div key={student.id}>
                            <h2 className="text-2xl">{student.name}</h2>
                            <Link className="bg-white px-6 py-2 text-black" href={`/students/${student.id}`}>View Details</Link>
                      </div>  
                    ))
                }
            </div>
        </div>
    )
}
