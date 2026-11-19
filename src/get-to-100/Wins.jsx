const Wins = ({ userWin }) => {
  return (
    <div className="wins-container">
      <h1>The Winning Users 🏆</h1>
      <div className="userName">
        {userWin.name}
        {userWin.steps}
      </div>
    </div>
  )
}

export default Wins