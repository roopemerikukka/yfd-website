
import React from 'react'
import { textStyles } from '../common/textStyles'
import LinkButton from '../components/linkButton'

export default class extends React.Component {
  static async getInitialProps({ contentfulClient }) {
    const entries = await contentfulClient.getEntries()
    return { entries }
  }

  render() {
    return (
      <React.Fragment>
        <h1 className={textStyles.h1.className}>Young Finnish Design</h1>
        <p className={textStyles.copy.className}>
          This is a test paragraph used to test base text styles. Here's a link to the <a href="https://stage.youngfinnishdesign.com/">staging environment</a> of the YFD website. This word <b>right here</b> is bolded. So is <strong>this</strong> but with a different tag. The total number of entries in Contentful is currently <b>{ this.props.entries.total }</b>. Isn't that great?
        </p>
        <LinkButton link="https://jsalovaara.com/">
          Pre-order
        </LinkButton>
      </React.Fragment>
    )
  }
}