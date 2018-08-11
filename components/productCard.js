import { Link } from '../routes'
import { textStyles } from '../common/textStyles'
import { BLACK, BLUE, WHITE } from '../common/colors'
import { remCalc } from '../common/helperFunctions'
import breakpoints from '../common/breakpoints'

export default ({ name, price, slug, imageUrl }) => (
  <Link scroll={false} route={`/products/${slug}`}>
    <a className='product-card'>
      <img  className='product-card__img' 
            srcSet={`
            ${imageUrl}?w=600&h=600&fit=fill 602w 602h,
            ${imageUrl}?w=1000&h=1000&fit=fill 1002w 1002h,
            ${imageUrl}?w=1000&h=1000&fit=fill 1282w 1282h,
            ${imageUrl}?w=1200&h=1200&fit=fill 1602w 1602h
            `}
            sizes='100vw'
            src={`${imageUrl}?w=1000&h=1000&fit=fill`} 
            alt={name}
            />
      <div className='product-card__overlay' />
      <div className='product-card__info'>
        <h2 className={textStyles.cardTitle.className}>{name}</h2>
        <h3 className={textStyles.cardPrice.className}>{price}€</h3>
      </div>
      <style jsx>{`
        .product-card {
          display: block;
          position: relative;
          width: 100%;
        }

        .product-card__img {
          max-width: 100%;
          margin-bottom: ${remCalc(8)};
        }
        
        .product-card__info {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
        }
        
        .product-card__info h2 {
          width: 70%;
          margin: 0;
          color: ${BLACK};
        }

        .product-card__info h3 {
          width: 30%;
          margin: 0;
          color: ${BLACK};
          text-align: right;
        }
        
        .product-card:hover {
          text-decoration: none;
        }

        .product-card:hover .product-card__info h2,
        .product-card:hover .product-card__info h3 {
          color: ${BLUE};
        }

        .product-card__overlay {
          display: none;
        }
      `}</style>

      <style jsx>{`
        @media screen and (min-width: ${breakpoints.xlarge}) {
          .product-card__info {
            position: absolute;
            display: block;
            width: 80%;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            opacity: 0;
            transition: opacity 0.12s ease-in;
          }

          .product-card__info h2 {
            width: 100%;
            margin-bottom: ${remCalc(8)};
            color: ${WHITE};
          }

          .product-card__info h3 {
            width: 100%;
            color: ${WHITE};
            text-align: left;
          }

          .product-card__img {
            margin-bottom: 0;
            vertical-align: top;  
          }

          .product-card__overlay {
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: ${BLUE};
            opacity: 0;
            transition: opacity 0.12s ease-in;
          }

          .product-card:hover .product-card__info h2,
          .product-card:hover .product-card__info h3 {
            color: ${WHITE};
          }

          .product-card:hover .product-card__info,
          .product-card:hover .product-card__overlay {
            opacity: 1;
          }
        }
      `}</style>
    </a>
  </Link>
)