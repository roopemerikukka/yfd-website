
import React from 'react'

export default class extends React.Component {
  static async getInitialProps({ ctx, contentfulClient }) {
    const {slug} = ctx.query
    const product = await contentfulClient.getEntries({
      'content_type': 'product',
      'fields.slug[in]': slug
    })
    return { product }
  }

  render() {
    const { product } = this.props
    return (
      <React.Fragment>
        <h1>This is: {product.items[0].fields.name}</h1>
      </React.Fragment>
    )
  }
}