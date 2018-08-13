import { Link } from '../routes'
import breakpoints from '../common/breakpoints'
import { textStyles } from '../common/textStyles'
import { BLACK, BLUE, GRAY } from '../common/colors'

export default ({ product }) => (
  <Link scroll={false} route={`/products/${product.fields.slug}`}>
    <a className='featured-product-card'>
      <div className='featured-product-card__title'>
        <h2 className={textStyles.cardTitle.className}>{product.fields.name}</h2>
        <h3 className={textStyles.cardPrice.className}>{product.fields.price}€</h3>
      </div>
      <div className='featured-product-card__img-warp'>
        <img className='featured-product-card__img' 
          srcSet={`
            ${product.fields.images[0].fields.file.url}?w=600&h=600&fit=fill 600w,
            ${product.fields.images[0].fields.file.url}?w=1200&h=1200&fit=fill 1200w
          `}
          sizes={`
            (max-width: ${breakpoints.small}) 100vw,
            50vw
          `}
          src={`${product.fields.images[0].fields.file.url}?w=300&h=300&fit=fill`} alt={product.fields.images[0].fields.title}
        />
      </div>
      <style jsx>{`
        .featured-product-card {
          display: block;
          width: 100%;
          cursor: pointer;
        }
        
        .featured-product-card__title {
          position: relative;
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 12px;
        }
        
        .featured-product-card__title h2 {
          width: 70%;
          margin: 0;
          color: ${BLACK};
          transition: color 0.12s ease-in;
        }
        
        .featured-product-card__title h3 {
          width: 30%;
          margin: 0;
          text-align: right;
          color: ${BLACK};
          transition: color 0.12s ease-in;
        }
        
        .featured-product-card:hover {
          text-decoration: none;
        }
        
        .featured-product-card:hover h2,
        .featured-product-card:hover h3 {
          color: ${BLUE};
          text-decoration: none;
        }
        
        .featured-product-card__img-warp {
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          position: relative;
          background-color: ${GRAY};
        }

        .featured-product-card__img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>

      <style jsx>{`
        @media screen and (min-width: ${breakpoints.large}) {
          .featured-product-card {
            display: flex;
            flex-direction: column;
          }
          
          .featured-product-card__title {
            flex-direction: column;
            margin-top: 24px;
            order: 2;
          }
          
          .featured-product-card__title h2 {
            width: 100%;
            margin-bottom: 8px;
          }
          
          .featured-product-card__title h3 {
            width: 100%;
            text-align: left;
          }
          
          .featured-product-card__img {
            order: 1;
          }
        }
      `}</style>

      <style jsx>{`
        @media screen and (min-width: ${breakpoints.xlarge}) {
          .featured-product-card__title {
            margin-top: 32px;
          }
        }
      `}</style>
    </a>
  </Link>
)