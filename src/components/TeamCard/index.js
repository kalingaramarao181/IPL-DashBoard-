import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {name, teamImageUrl, id} = cardDetails
  return (
    <li className="team-card-item">
      <Link className="team-card" to={`/team-matches/${id}`}>
        <img className="team-logo" src={teamImageUrl} alt={name} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
