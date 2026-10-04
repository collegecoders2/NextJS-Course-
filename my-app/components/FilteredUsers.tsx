"use client"
import { useState } from "react";
type UserType = {
    id:number,
    name:string,
    username:string
}

export default function FilteredUsers({users}:{users:UserType[]}){
    const [search,setSearch] = useState("")

    const filteredUsers = users.filter((User)=>{
        return User.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
    return(
        <div>
            <input type="text" placeholder="Search User:" onChange={(e)=>setSearch(e.target.value)}/>
            <div>
                {
                    filteredUsers.map((user:UserType)=>{
                        return (
                            <div key={user.id}>
                            <h1>{user.id} - {user.name}</h1>
                            </div>
                        )
                })
                }
            </div>
        </div>
    )
}