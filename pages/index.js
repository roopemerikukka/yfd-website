
import React from 'react'
import { createClient } from '../common/contentful'
import { textStyles } from '../common/textStyles'

export default class extends React.Component {
  static async getInitialProps({ contentfulClient }) {
    const client = createClient()
    const entries = await client.getEntries()
    return { entries }
  }

  render() {
    return (
      <React.Fragment>
        <h1 className={`${textStyles.h1.className}`}>Young Finnish Design</h1>
        <p>
          This is a test paragraph used to test base text styles. Here's a link to the <a href="https://stage.youngfinnishdesign.com/">staging environment</a> of the YFD website. This word <b>right here</b> is bolded. So is <strong>this</strong> but with a different tag. The total number of entries in Contentful is currently <b>{ this.props.entries.total }</b>. Isn't that great?
        </p>
      </React.Fragment>
    )
  }
}