
import React from 'react'
import FeaturedPullUp from '../components/featuredPullUp'
// import PageHeading from '../components/pageHeading'
import Wysiwyg from '../components/wysiwyg'
import breakpoints from '../common/breakpoints'
import SocialMetaFields from '../components/socialMetaFields'

export default class extends React.Component {
  static async getInitialProps({ contentfulClient }) {
    const products = await contentfulClient.getEntries({
      'content_type': 'product',
      'order': '-sys.createdAt'
    })

    const content = await contentfulClient.getEntries({
      'content_type': 'page',
      'fields.slug[in]': 'home'
    })

    return { products, content }
  }

  render() {
    const { products, content, siteSettings } = this.props

    return (
      <React.Fragment>
        <SocialMetaFields
          title={content.items[0].fields.title}
          description={content.items[0].fields.shareDescription}
          siteSettings={siteSettings}
          imgSrc={content.items[0].fields.shareImage !== undefined ? content.items[0].fields.shareImage.fields.file.url : undefined}
          ogType='article'
          path='/'
        />
        <div className='home'>
          {/* Uncomment the line below (and the import above) to show the page heading */}
          {/*  products.total > 1 ? <PageHeading heading='Our products' /> : '' */}
          <FeaturedPullUp products={products.items} />
          {content.items.length > 0 &&
            <div className='home__content'>
              <Wysiwyg content={content.items[0].fields.content} />
            </div>
          }
        </div>

        <style jsx>{`
          .home {
            margin-bottom: 4rem;
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.medium}) {
            .home {
              margin-bottom: 9rem;
            }

            .home__content {
              width: 82.6%;
              margin: 0 auto;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.large}) {
            .home {
              margin-bottom: 12rem;
            }

            .home__content {
              width: 65.5%;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.xlarge}) {
            .home {
              margin-bottom: 16rem;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.xxlarge}) {
            .home {
              margin-bottom: 24rem;
            }
          }
        `}</style>
      </React.Fragment>
    )
  }
}