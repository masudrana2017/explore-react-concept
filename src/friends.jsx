import { useEffect, useState } from 'react'
import Friend from './friend'

import ('./friends.css')
export default function Friends(){
   const[friends,setFriends]=useState([])
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setFriends(data))
   },[])
    return(
        <div className="box">
            <h4>Friends:{friends.length}</h4>
            {
                friends.map(friend=><Friend friend={friend}></Friend>)
            }
        </div>
    )
}


/*
1. state to hold data
2. useEffect with dependency array
3. use fetch to load data
4. set loaded data to the state
*/ 