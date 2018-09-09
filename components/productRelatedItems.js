import { Component } from 'react'
import { remCalc } from '../common/helperFunctions'
import breakpoints from '../common/breakpoints'
import ProductCard from '../components/productCard'

export default class RelatedItems extends Component {
  render() {
    const { relatedProducts } = this.props

    return (
      <div className='related-items'>
        <h2>More products</h2>
        <ul className='related-items__pu'>
          {relatedProducts.map((product, index) => (
            <li key={index}>
              <ProductCard
                name={product.fields.name}
                slug={product.fields.slug}
                price={product.fields.price}
                imageUrl={product.fields.images[0].fields.file.url}
              />
            </li>
          ))}
        </ul>
        <style jsx>{`
          .related-items__pu {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .related-items__pu li {
            margin-bottom: ${remCalc(24)};
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.medium}) {
            .related-items__pu {
              display: flex;
              flex-wrap: wrap;
              overflow: hidden;
              margin: 0 -2.954545% ${remCalc(24)};
            }

            .related-items__pu li {
              width: 50%;
              padding: 0 2.954545%;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.large}) {
            .related-items__pu {
              margin: 0 -1.934524% ${remCalc(24)};
            }

            .related-items__pu li {
              width: 33.333%;
              padding: 0 1.934524%;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.xlarge}) {
            .related-items__pu {
              margin: 0 -1.3729977% ${remCalc(24)};
            }

            .related-items__pu li {
              width: 33.333%;
              padding: 0 1.3729977%;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.xxlarge}) {
            .related-items__pu {
              margin: 0 -1.139818% ${remCalc(24)};
            }

            .related-items__pu li {
              width: 33.333%;
              padding: 0 1.139818%;
            }
          }
        `}</style>
      </div>
    )
  }
}
