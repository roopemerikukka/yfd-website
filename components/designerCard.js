export default ({ designer }) => (
  <div className='designer-card' data-slug={`designers/${designer.slug}`}>
    <img src={`${designer.profileImage.fields.file.url}?w=100&h=100`} alt={designer.name} />
    <p>{designer.name}</p>
    <em>{designer.tagline}</em>
  </div>
)