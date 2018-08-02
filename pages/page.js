import React from 'react'
import PageHeading from '../components/pageHeading'
import Wysiwyg from '../components/wysiwyg'
import { notFoundError } from '../common/helperFunctions'

export default class Page extends React.Component {
  static async getInitialProps({ ctx, contentfulClient }) {
    const slug = ctx.asPath.replace(/\//gi, '')
    const page = await contentfulClient.getEntries({
      'content_type': 'page',
      'fields.slug[in]': slug
    })
    return { page }
  }

  render () {
    const { page } = this.props

    // Throw 404 if page is not found
    if ( page.total === 0 ) throw notFoundError()

    const content = page.items[0].fields

    return (
      <div className='page'>
        <PageHeading heading={content.title} />
        <Wysiwyg content={content.content} />

        <style jsx>{`
          .page {
            margin-bottom: 4rem;
          }
        `}</style>
      </div>
    )
  }
}