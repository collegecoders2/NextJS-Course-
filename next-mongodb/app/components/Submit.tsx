"use client"
import { useFormStatus } from "react-dom"
export default function Submit(){

    const { pending } = useFormStatus();
    return(
        <div>
            <button className="bg-amber-300 px-6 py-2 text-black" type="submit" disabled={pending}>{pending ? "creating..." : "Submit"}</button>
        </div>
    )
}