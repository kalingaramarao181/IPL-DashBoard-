import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    competingTeam,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    competingTeamLogo,
    manOfTheMatch,
  } = latestMatchDetails
  console.log(umpires)

  return (
    <div>
      <h1 className="heading">Latest Match</h1>
      <div className="latest-match-container">
        <div className="match-results">
          <p className="team-name">{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          className="logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
        <div className="match-results">
          <p className="text">First Innings</p>
          <p className="text">{firstInnings}</p>
          <p className="text">Second Innings</p>
          <p className="text">{secondInnings}</p>
          <p className="text">Man Of The Match</p>
          <p className="text">{manOfTheMatch}</p>
          <p className="text">Umpires</p>
          <p className="text">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
