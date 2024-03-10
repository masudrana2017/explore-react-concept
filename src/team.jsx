import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11)
    function handleAdd(){
        const newTeam=team+1;
        setTeam(newTeam);
    }
    const handleReduce=()=>{
        const newTeam=team-1;
        setTeam(newTeam)
    }
    const teamStyle={
        border:'2px solid purple',
        padding:'15px',
        margin:'15px'
    }
    return(
        <div style={teamStyle}>
            <h3>Players:{team}</h3>
           <button onClick={handleAdd}>add player</button>
           <button onClick={handleReduce}>Reduce Player</button>
        </div>
    )
}