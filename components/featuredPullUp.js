export default ({products}) => (
  <ul className='featured-pu'>
    {products.map((product, index) => (
      <li key={index}>{product.fields.name}</li>
    ))}
    <style jsx>{`
      .featured-pu {}
    `}</style>
  </ul>
)