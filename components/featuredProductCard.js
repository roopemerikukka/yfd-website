import {Link} from '../routes'
import breakpoints from '../common/breakpoints'
import { textStyles } from '../common/textStyles'
import { BLACK, BLUE } from '../common/colors'

export default ({ product }) => (
  <div className='featured-product-card'>
    <Link route={`products/${product.fields.slug}`}>
      <a>
        <div className='featured-product-card__title' data-slug={product.fields.slug}>
          <h2 className={textStyles.cardTitle.className}>{product.fields.name}</h2>
          <h3 className={textStyles.cardPrice.className}>{product.fields.price}€</h3>
        </div>
        <img  className='featured-product-card__img' 
              srcSet={`
              ${product.fields.images[0].fields.file.url}?w=600&h=600 600w,
              ${product.fields.images[0].fields.file.url}?w=1000&h=688 1000w,
              ${product.fields.images[0].fields.file.url}?w=1280&h=880 1280w,
              ${product.fields.images[0].fields.file.url}?w=1600&h=1100 1600w,
              ${product.fields.images[0].fields.file.url}?w=2000&h=1378 20000w,
              `}
              sizes=" 
              (max-width: 320px) 280px,
              (max-width: 768px) 768px,
              (max-width: 1024px) 1024px,
              (max-width: 1280px) 1280px,
              2000px"
              src={`${product.fields.images[0].fields.file.url}?w=1000&h=1000`} alt={product.fields.images[0].fields.title}
              />
        </a>
    </Link>
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

      .featured-product-card__img {
        max-width: 100%;
      }

      @media screen and (min-width: ${breakpoints.xlarge}) {
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

      @media screen and (min-width: ${breakpoints.xlarge}) {
        .featured-product-card__title {
          margin-top: 32px;
        }
      }

    `}</style>
  </div>
)