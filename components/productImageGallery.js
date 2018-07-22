export default ({ images }) => (
  <div className='product-image-gallery'>
    {images.map((image, index) => (
      <img key={index} src={`${image.fields.file.url}?w=2000&h=1378`} />
    ))}

    <style jsx>{`
      img {
        max-width: 100%;
      }
    `}</style>
  </div>
)