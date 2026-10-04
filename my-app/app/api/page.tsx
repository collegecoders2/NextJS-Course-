import FilteredUsers from "@/components/FilteredUsers";

export default async function Api(){
    
    const response =await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json();
    return(
        <div>
            <h1>API DATA</h1>
            <FilteredUsers users={users}/>         
        </div>
    )
}