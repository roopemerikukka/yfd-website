import {Link} from '../routes'
import breakpoints from '../common/breakpoints'
import { textStyles } from '../common/textStyles'
import { BLACK, BLUE } from '../common/colors'

export default ({ product }) => (
  <Link route={`/products/${product.fields.slug}`}>
    <a className='product-preview-card'>
      <img  className='product-preview-card__img' 
        srcSet={`
          ${product.fields.images[0].fields.file.url}?w=600&h=600&fit=fill 600w,
          ${product.fields.images[0].fields.file.url}?w=1000&h=1000&fit=fill 1000w,
        `}
        sizes=" 
          (max-width: 320px) 100vw,
          33vw"
        src={`${product.fields.images[0].fields.file.url}?w=600&h=600&fit=fill`} alt={product.fields.images[0].fields.title}
      />
      <div className='product-preview-card__title'>
        <h2 className={textStyles.cardTitle.className}>{product.fields.name}</h2>
        <h3 className={textStyles.cardPrice.className}>{product.fields.price}€</h3>
      </div>
      <style jsx>{`
        .product-preview-card {
          display: block;
          width: 100%;
          cursor: pointer;
        }
        
        .product-preview-card__title {
          position: relative;
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        
        .product-preview-card__title h2 {
          width: 70%;
          margin: 0;
          color: ${BLACK};
          transition: color 0.12s ease-in;
        }
        
        .product-preview-card__title h3 {
          width: 30%;
          margin: 0;
          text-align: right;
          color: ${BLACK};
          transition: color 0.12s ease-in;
        }
        
        .product-preview-card:hover {
          text-decoration: none;
        }
        
        .product-preview-card:hover h2,
        .product-preview-card:hover h3 {
          color: ${BLUE};
          text-decoration: none;
        }
        
        .product-preview-card__img {
          width: 100%;
          max-width: 100%;
        }
      `}</style>

      <style jsx>{`
        @media screen and (min-width: ${breakpoints.large}) {
          .product-preview-card {
            display: flex;
            flex-direction: column;
          }
          
          .product-preview-card__title {
            flex-direction: column;
            margin-top: 24px;
            order: 2;
          }
          
          .product-preview-card__title h2 {
            width: 100%;
            margin-bottom: 8px;
          }
          
          .product-preview-card__title h3 {
            width: 100%;
            text-align: left;
          }
          
          .product-preview-card__img {
            order: 1;
          }
        }
      `}</style>

      <style jsx>{`
        @media screen and (min-width: ${breakpoints.xlarge}) {
          .product-preview-card__title {
            margin-top: 32px;
          }
        }
      `}</style>
    </a>
  </Link>
)