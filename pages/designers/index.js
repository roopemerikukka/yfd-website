import React from 'react'
import SocialMetaFields from '../../components/socialMetaFields'
import DesignerPullUp from '../../components/designerPullUp'
import PageHeading from '../../components/pageHeading'
import Wysiwyg from '../../components/wysiwyg'
import breakpoints from '../../common/breakpoints'

export default class Designers extends React.Component {
  static async getInitialProps({ ctx, contentfulClient }) {
    const slug = ctx.asPath.replace(/\//gi, '')

    const designers = await contentfulClient.getEntries({
      'content_type': 'designer'
    })
    const page = await contentfulClient.getEntries({
      'content_type': 'page',
      'fields.slug[in]': slug
    })
    return { designers, page: page.items[0].fields, path: ctx.asPath }
  }

  render() {
    const { designers, page, path, siteSettings } = this.props

    return (
      <React.Fragment>
        <div className='page'>
          <SocialMetaFields
            title={page.title}
            description={page.shareDescription}
            siteSettings={siteSettings}
            imgSrc={page.shareImage !== undefined ? page.shareImage[0].fields.file.url : undefined}
            ogType='article'
            path={path}
          />
          <PageHeading heading={page.title} />
          <Wysiwyg content={page.content} />

          <style jsx>{`
            @media screen and (min-width: ${breakpoints.medium}) {
              .page {
                width: 82.6%;
                margin: 0 auto;
              }
            }
          `}</style>

          <style jsx>{`
            @media screen and (min-width: ${breakpoints.large}) {
              .page {
                width: 65.5%;
                margin: 0 auto;
              }
            }
          `}</style>
        </div>
        <DesignerPullUp designers={designers.items} />
      </React.Fragment>
    )
  }
}