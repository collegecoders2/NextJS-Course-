"use client"
import { createStudent } from "../actions/studentActions"
export default function Student(){
    return (
        <div>
            <form action={createStudent}>
                <input type="text" name="name" placeholder="Enter Name:"/>
                <input type="text" name="age" placeholder="Enter Age:"/>
                <input type="text" name="course" placeholder="Enter Course:"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}