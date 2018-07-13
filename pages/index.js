
import React from 'react'
import { createClient } from '../common/contentful'

export default class extends React.Component {
  static async getInitialProps({ contentfulClient }) {
    const client = createClient()
    const entries = await client.getEntries()
    return { entries }
  }

  render() {
    return (
      <div>
        CONTENTFUL_SPACE_ID: { process.env.CONTENTFUL_SPACE_ID }
        <br />
        CONTENTFUL_ACCESS_TOKEN: { process.env.CONTENTFUL_ACCESS_TOKEN }
        <br />
        NUMBER OF FETCHED ENTRIES: { this.props.entries.total }
      </div>
    )
  }
}