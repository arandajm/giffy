import { Link } from 'wouter'
import './Gif.css'

const Gif = ({ title, url, id }) => {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img loading="lazy" alt={title} src={url} />
      </Link>
    </div>
  )
}

export default Gif
