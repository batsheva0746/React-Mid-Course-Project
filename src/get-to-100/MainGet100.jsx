import { useState } from "react"
import AddUsers from "./AddUsers"
import MainGame from "./MainGame"
import Wins from "./Wins"

const MainGet100 = () => {
    const [gameStatus, setGAmeStatus] = useState(false)
    const [users, setUsers] = useState([])
    const [userWin, setUserWin] = useState([])
    const [activeUsers, setActiveUsers] = useState([])
    const [start,setStart]=useState(false)
    const startGameClick = () => {
        setStart(true)
        setGAmeStatus(true)
        setActiveUsers(users)
        const usersMap = users.map(user => {
            if (user.id === 1)
                return { ...user, disabled: false }
            else
                return user
        })
        setUsers(usersMap)
    }
    const addUser = (name) => {
        const user = {
            id: users.length + 1,
            name,
            num: Math.floor(Math.random() * 100),
            steps: 0,
            disabled: true,
            win: false
        }
        setUsers([...users, user])
    }

    const updateUser = (newUser) => {
        const nextIndex = activeUsers.findIndex(u => u.id === newUser.id)
        const nextUser = activeUsers[(nextIndex + 1) % activeUsers.length]
        const userMap = users.map(u => {
            if (u.id === newUser.id)
                return newUser
            if (nextUser && u.id === nextUser.id)
                return { ...u, disabled: false }
            return u
        })
        setUsers(userMap)
        if (newUser.num === 100) {
            setUserWin(newUser)
            setActiveUsers(activeUsers.filter(u => u.id != newUser.id))
        }
    }
    let view = null
    if (gameStatus === true) {
        view=<MainGame users={users} updateUser={updateUser} />
    }
    else{
        view=<AddUsers addUser={addUser} />
    }
    return (
        <div className="main-game">
            <h2>num playes {users.length}</h2>
            {users.length >= 3 && start===false&&
                <button onClick={() => { startGameClick() }}>Start Game</button>
            }

            {userWin && <Wins userWin={userWin} />}
            {view}
        </div>
    )
}
export default MainGet100