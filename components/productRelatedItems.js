import { Component } from 'react'
import { remCalc } from '../common/helperFunctions'
import breakpoints from '../common/breakpoints'
import ProductCard from '../components/productCard'

export default class RelatedItems extends Component {
  render() {

    const products = [
      {
        name: 'Airy Table Lamp',
        slug: 'airy-table-lamp',
        price: '299',
        image: '//images.ctfassets.net/3axna8x95z40/bjms7oRsjY0QEeycEcGs8/f4cf93f9aea46f1052fa67497b796a0e/clothing-rack_2600x1792-compressor.jpg'
      },
      {
        name: 'Coat hanger extraordinnaire with long name',
        slug: 'airy-table-lamp',
        price: '2310',
        image: '//images.ctfassets.net/3axna8x95z40/2ZwbsPEdA42eKEq6kgG4m8/b8ad85a37d76bdf13ec64efb355b5fa2/airy_2002x1377-compressed.jpg'
      },
      {
        name: 'Super sofa',
        slug: 'airy-table-lamp',
        price: '399',
        image: '//images.ctfassets.net/3axna8x95z40/1zLATueB5KgwqyI64WooYI/cebadaa11593ae9bf8b3b8daa9273663/tuotekuvavalo2.jpg'
      }
    ]

    return (
      <div className='related-items'>
        <h2>More products</h2>
        <ul className='related-items__pu'>
          {products.map((product, index) => (
            <li key={index}>
              <ProductCard
                name={product.name}
                slug={product.slug}
                price={product.price}
                imageUrl={product.image}
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
          
          @media screen and (min-width: ${breakpoints.large}) {
            .related-items__pu {
              margin: 0 -1.934524% ${remCalc(24)};
            }

            .related-items__pu li {
              width: 33.333%;
              padding: 0 2.954545%;
            }
          }

          @media screen and (min-width: ${breakpoints.xlarge}) {
            .related-items__pu {
              margin: 0 -1.3729977% ${remCalc(24)};
            }

            .related-items__pu li {
              width: 33.333%;
              padding: 0 1.3729977%;
            }
          }

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
