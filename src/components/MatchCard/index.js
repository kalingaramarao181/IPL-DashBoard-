import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeam,
    result,
    competingTeamLogo,
    matchStatus,
  } = matchCardDetails

  const resultCLassName = matchStatus === 'Won' ? 'green-color' : 'red-color'

  return (
    <li className="recent-match-card">
      <img
        className="recent-match-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="recent-match-name">{competingTeam}</p>
      <p className="recent-match-result">{result}</p>
      <p className={resultCLassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
