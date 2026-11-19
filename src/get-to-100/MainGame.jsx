import UserCard from "./UserCard"

const MainGame = ({users,updateUser}) => {
    return <div className="game-container">
    {users.map(user=><UserCard key={user.id}  user={user} updateUser={updateUser}/>)}
    </div>
}
export default MainGame