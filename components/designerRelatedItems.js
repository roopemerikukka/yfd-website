import ProductPreviewCard from '../components/productPreviewCard'
import breakpoints from '../common/breakpoints'

export default ({ products }) => (
  <ul className='related-pu'>
    {products.map((product, index) => (
      <li key={index}><ProductPreviewCard product={product} /></li>
    ))}

    <style jsx>{`
      .related-pu {
        list-style: none;
        margin: 0 0 6rem 0;
        padding: 0;
      }

      .related-pu li {
        margin-bottom: 4rem;
      }

      .related-pu li:last-of-type {
        margin-bottom: 0;
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.medium}) {
        .related-pu {
          display: flex;
          width: auto;
          flex-wrap: wrap;
          overflow: hidden;
          margin: 0 0 10rem -2rem;
        }

        .related-pu li {
          width: 50%;
          padding: 0 0 0 2rem;
          margin-bottom: 2rem;
        }

        .related-pu li:last-of-type {
          margin-bottom: 2.5rem;
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.large}) {
        .related-pu li {
          width: 33.3333%;
          margin-bottom: 5rem;
        }
      }
    `}</style>
  </ul>
)