import { useEffect, useState } from "react";

export default function Users(){
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))

        
    },[])
    return(
        <div>Users:{users.length}</div>
    )
}

/*
1. declare a state to hold to data 
2. useEffet with call back and dependancy
3. load data
*/ 