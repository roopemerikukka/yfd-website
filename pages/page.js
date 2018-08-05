import React from 'react'
import Head from 'next/head'
import PageHeading from '../components/pageHeading'
import Wysiwyg from '../components/wysiwyg'
import { notFoundError } from '../common/helperFunctions'
import breakpoints from '../common/breakpoints'
import SocialMetaFields from '../components/socialMetaFields'
import YfdPeople from '../components/yfdPeople'

export default class Page extends React.Component {
  static async getInitialProps({ ctx, contentfulClient }) {
    const slug = ctx.asPath.replace(/\//gi, '')
    const page = await contentfulClient.getEntries({
      'content_type': 'page',
      'fields.slug[in]': slug
    })
    return { page, path: ctx.asPath }
  }

  extraComponent(additionalComponent) {
    switch (additionalComponent) {
      case 'YFD-people':
        return <YfdPeople people={this.props.siteSettings.yfdPeople} />
      default:
        return null
    }
  }

  render() {
    const { page, siteSettings, path } = this.props

    // Throw 404 if page is not found
    if (page.total === 0) throw notFoundError()

    const content = page.items[0].fields

    return (
      <React.Fragment>
        <SocialMetaFields
          title={content.title}
          description={content.shareDescription}
          siteSettings={siteSettings}
          imgSrc={content.shareImage !== undefined ? content.shareImage[0].fields.file.url : undefined}
          ogType='article'
          path={path}
        />
        <div className='page'>
          <PageHeading heading={content.title} />
          <Wysiwyg content={content.content} />
          {this.extraComponent(content.additionalComponent)}
        </div>
        <style jsx>{`
          .page {
            margin-bottom: 4rem;
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.medium}) {
            .page {
              width: 82.6%;
              margin: 0 auto 9rem;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.large}) {
            .page {
              width: 65.5%;
              margin: 0 auto 12rem;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.xlarge}) {
            .page {
              margin-bottom: 16rem;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.xxlarge}) {
            .page {
              margin-bottom: 24rem;
            }
          }
        `}</style>
      </React.Fragment>
    )
  }
}