import FeaturedProductCard from '../components/featuredProductCard'
import breakpoints from '../common/breakpoints'

export default ({ products }) => (
  <ul className='featured-pu'>
    {products.map((product, index) => (
      <li key={index}><FeaturedProductCard product={product} /></li>
    ))}

    <style jsx>{`
      .featured-pu {
        list-style: none;
        margin: 0 0 100px 0;
        padding: 0;
      }

      .featured-pu li {
        margin-bottom: 56px;
      }

      .featured-pu li:last-of-type {
        margin-bottom: 0;
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.medium}) {
        .featured-pu {
          width: 82.6%;
          margin: 0 auto 150px auto;
        }

        .featured-pu li {
          margin-bottom: 40px;
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.large}) {
        .featured-pu li {
          margin-bottom: 70px;
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xlarge}) {
        .featured-pu {
          display: flex;
          width: auto;
          flex-wrap: wrap;
          overflow: hidden;
          margin: 0 -1.515151515% 150px -1.515151515%;
        }

        .featured-pu li {
          width: 33.333%;
          padding: 0 1.515151515%;
          margin-bottom: 40px;
        }

        .featured-pu li:last-of-type {
          margin-bottom: 40px;
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xxlarge}) {
        .featured-pu {
          margin: 0 -1.761006289% 152px -1.761006289%;
        }

        .featured-pu li {
          padding: 1.761006289%;
        }
      }
    `}</style>
  </ul>
)