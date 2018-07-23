import { Link } from '../routes'

export default ({ designer }) => (
  <Link to={`/designers/${designer.slug}`}>
    <a className='designer-card'>
      <img src={`${designer.profileImage.fields.file.url}?w=100&h=100`} alt={designer.name} />
      <p>{designer.name}</p>
      <em>{designer.tagline}</em>
    </a>
  </Link>
)