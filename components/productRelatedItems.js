import { Component } from 'react'
import { Link } from '../routes'

export default class RelatedItems extends Component {
  render() {

    const products = [
      {
        name: 'Another product',
        slug: 'another-product',
        image: '//images.ctfassets.net/3axna8x95z40/bjms7oRsjY0QEeycEcGs8/f4cf93f9aea46f1052fa67497b796a0e/clothing-rack_2600x1792-compressor.jpg?w=100'
      },
      {
        name: 'Another product',
        slug: 'another-product',
        image: '//images.ctfassets.net/3axna8x95z40/bjms7oRsjY0QEeycEcGs8/f4cf93f9aea46f1052fa67497b796a0e/clothing-rack_2600x1792-compressor.jpg?w=100'
      },
      {
        name: 'Another product',
        slug: 'another-product',
        image: '//images.ctfassets.net/3axna8x95z40/bjms7oRsjY0QEeycEcGs8/f4cf93f9aea46f1052fa67497b796a0e/clothing-rack_2600x1792-compressor.jpg?w=100'
      }
    ]

    return (
      <div className='related-items'>
        <h2>More products</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <Link route={`products/${product.slug}`}>
                <a>
                  <h4>{product.name}</h4>
                  <img src={product.image} />
                </a>
              </Link>
            </li>
          ))}

        </ul>
        <style jsx>{`
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          ul li {
            display: inline-block;
          }
        `}</style>
      </div>
    )
  }
}
