const UserCard = ({user,updateUser}) => {
    const plusOne=()=>{
        const newUser={...user,num:user.num+1,steps:user.steps+1,disabled:true}
        if(newUser.num===100)
            newUser.win=true
        updateUser(newUser)
    }
    const minusOne=()=>{
        const newUser={...user,num:user.num-1,steps:user.steps+1,disabled:true}
        if(newUser.num===100)
            newUser.win=true
        updateUser(newUser)
    }
    const double=()=>{
        const newUser={...user,num:user.num*2,steps:user.steps+1,disabled:true}
        if(newUser.num===100)
            newUser.win=true
        updateUser(newUser)
    }
    const Divide=()=>{
        if(user.num%2!=0)
            user.num+=1
        const newUser={...user,num:user.num/2,steps:user.steps+1,disabled:true}
        if(newUser.num===100)
            newUser.win=true
        updateUser(newUser)
    }
  return (
     <div className={`user-card ${user.disabled ? "disabled" : "active"}`}>
        <h2>{user.name}</h2>
        <h1 className="user-number">{user.num}</h1>
        <h5>Steps: {user.steps}</h5>
        <button disabled={user.disabled} onClick={plusOne}>+1</button>
        <button disabled={user.disabled} onClick={minusOne}>-1</button>
        <button disabled={user.disabled} onClick={double}>*2</button>
        <button disabled={user.disabled} onClick={Divide}>/2</button>
    </div>
  )
}

export default UserCard