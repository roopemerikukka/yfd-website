
import React from 'react'
import { textStyles } from '../common/textStyles'
import LinkButton from '../components/linkButton'
import FeaturedPullUp from '../components/featuredPullUp'
import PageHeading from '../components/pageHeading'

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
        {this.props.products.total > 1 ? <PageHeading heading='Our products'/> : '' } 
        <FeaturedPullUp products={this.props.products.items} />
        <PageHeading heading='About the company'/>
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