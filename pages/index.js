
import React from 'react'
import { textStyles } from '../common/textStyles'
import LinkButton from '../components/linkButton'
import FeaturedPullUp from '../components/featuredPullUp'

export default class extends React.Component {
  static async getInitialProps({ contentfulClient }) {
    const products = await contentfulClient.getEntries({
      'content_type': 'product',
      'order': '-sys.createdAt'
    })
    return { products }
  }

  render() {
    return (
      <React.Fragment>
        <FeaturedPullUp products={this.props.products.items} />
        <h1 className={textStyles.h1.className}>Young Finnish Design</h1>
        <p className={textStyles.copy.className}>
          This is a test paragraph used to test base text styles. Here's a link to the <a href="https://stage.youngfinnishdesign.com/">staging environment</a> of the YFD website. This word <b>right here</b> is bolded. So is <strong>this</strong> but with a different tag. The total number of entries in Contentful is currently <b>{ this.props.products.total }</b>. Isn't that great?
        </p>
        <LinkButton link="https://jsalovaara.com/">
          Pre-order
        </LinkButton>
      </React.Fragment>
    )
  }
}