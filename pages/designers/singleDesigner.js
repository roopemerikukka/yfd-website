import React from 'react'
import PeoplePullUp from '../../components/peoplePullUp'
import { markdownToHtml } from '../../common/markdown'

export default class Designer extends React.Component {
  static async getInitialProps({ ctx, contentfulClient }) {
    const slug = ctx.asPath.replace(/\/designers\//gi, '')
    const designer = await contentfulClient.getEntries({
      'content_type': 'designer',
      'fields.slug[in]': slug
    })
    return { designer: designer.items[0] }
  }
  render() {
    const { designer } = this.props
    return (
      <div>
        <h1>{designer.fields.name}</h1>
        <h4>{designer.fields.tagline}</h4>
        <img src={designer.fields.profileImage.fields.file.url} />
        <h3>Who?</h3>
        <PeoplePullUp people={designer.fields.people} />
        <quote>{designer.fields.quote}</quote>
        <div dangerouslySetInnerHTML={{ __html: markdownToHtml(designer.fields.description) }} />
        <h2>Products from {designer.fields.name}</h2>
        <p>Related items here</p>

        <style jsx>{`
          img {
            max-width: 100%;
          }
        `}</style>
      </div>
    )
  }
}