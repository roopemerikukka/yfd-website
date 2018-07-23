import React from 'react'
import { Link } from '../../routes'

export default class Products extends React.Component {
  static async getInitialProps({ contentfulClient }) {
    const products = await contentfulClient.getEntries({
      'content_type': 'product'
    })
    return { products }
  }

  render() {
    const { products } = this.props
    return (
      <div>
        <h1>Our products</h1>
        <ul>
          {products.items.map((designer, index) => (
            <li key={index}>
              <Link to={`/products/${designer.fields.slug}`}>
                <a>
                  {designer.fields.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}