import { useState } from "react"

const AddUsers=({addUser})=>{
    const [name,setName]=useState("")
    return <div className="add-users" style={{marginTop:"50px"}}>
    <h1>enter the user name</h1>
    <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"/>
    <button onClick={()=>{addUser(name) ;setName("")} }>Add User</button>
    {name}
    </div>
}
export default AddUsers