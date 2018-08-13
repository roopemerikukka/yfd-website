import React from 'react'
import PeoplePullUp from '../../components/peoplePullUp'
import Wysiwyg from '../../components/wysiwyg'
import { textStyles } from '../../common/textStyles'
import { remCalc, stripMarkdown } from '../../common/helperFunctions'
import breakpoints from '../../common/breakpoints'
import RelatedProducts from '../../components/designerRelatedItems'
import SocialMetaFields from '../../components/socialMetaFields'
import { GRAY } from '../../common/colors'

export default class Designer extends React.Component {
  static async getInitialProps({ ctx, contentfulClient }) {
    const slug = ctx.asPath.replace(/\/designers\//gi, '')
    const designer = await contentfulClient.getEntries({
      'content_type': 'designer',
      'fields.slug[in]': slug
    })
    const relatedProducts = await contentfulClient.getEntries({
      'content_type': 'product',
      'links_to_entry': designer.items[0].sys.id
    })

    return { designer: designer.items[0], products: relatedProducts.items || [], path: ctx.asPath }
  }
  render() {
    const { designer, products, siteSettings, path } = this.props

    return (
      <React.Fragment>
        <SocialMetaFields
          title={designer.fields.name}
          description={`${stripMarkdown(designer.fields.description).slice(0, 160)}...`}
          siteSettings={siteSettings}
          imgSrc={designer.fields.profileImage.fields.file.url}
          ogType='article'
          path={path}
        />
        <div className='designer'>
          <div className='designer__name'>
            <h1 className={textStyles.productName.className}>{designer.fields.name}</h1>
            <h4 className={textStyles.designerTagline.className}>{designer.fields.tagline}</h4>
          </div>
          <div className='designer__profile-img'>
            <div className='designer__profile-img-wrap'>
              <img src={designer.fields.profileImage.fields.file.url} />
            </div>
          </div>
          <div className='designer__people'>
            <h3 className={textStyles.designerWho.className}>Who?</h3>
            <PeoplePullUp people={designer.fields.people} />
          </div>
          <div className='designer__quote'>
            <q className={textStyles.designerQuote.className}>{designer.fields.quote}</q>
          </div>
          <div className='designer__description'>
            <Wysiwyg content={designer.fields.description} />
          </div>

          <div className='designer__products'>
            <h4 className={textStyles.designerRelated.className}>Products from {designer.fields.name}</h4>
            <RelatedProducts products={products} />
          </div>
        </div>

        <style jsx>{`
          .designer {}

          .designer__name h1 {
            margin: 0 0 ${remCalc(8)} 0;
          }

          .designer__name h4 {
            margin: 0 0 ${remCalc(16)} 0;
          }

          .designer__profile-img {
            width: 100%;
            margin-bottom: ${remCalc(32)};
          }

          .designer__profile-img-wrap {
            position: relative;
            height: 0;
            padding-bottom: ${500/7}%;
            background-color: ${GRAY};
          }

          .designer__profile-img img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .designer__people {
            margin-bottom: ${remCalc(48)};
            padding: 0 ${remCalc(10)};
          }

          .designer__people h3 {
            margin: 0 0 ${remCalc(16)} 0;
          }

          .designer__quote q {
            display: block;
            margin: 0 0 ${remCalc(16)} 0;
          }

          .designer__description {
            margin-bottom: ${remCalc(92)};
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.medium}) {
            .designer {
              display: flex;
              flex-direction: column;
            }

            .designer__name {
              width: 83%;
              margin: 0 auto;
            }

            .designer__quote {
              margin-bottom: ${remCalc(22)};
            }

            .designer__people {
              width: 57%;
              margin-left: 0 0 ${remCalc(78)} 8.5%;
            }

            .designer__name h4 {
              margin: 0 0 ${remCalc(12)} 0;
            }

            .designer__profile-img {
              margin-bottom: ${remCalc(78)};
            }

            .designer__description {
              margin-bottom: ${remCalc(140)};
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.large}) {
            .designer {
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-between;
            }

            .designer__name {
              order: 1;
              width: 100%;
            }

            .designer__profile-img {
              order: 2;
            }

            .designer__quote {
              width: 100%;
              order: 3;
            }

            .designer__quote q {
              width: 52.083333%;
            }

            .designer__description {
              width: 52.083333%;
              margin-bottom: ${remCalc(92)};
              order: 4;
            }

            .designer__people {
              width: 39.285714%;
              padding: 0;
              order: 5;
            }

            .designer__products {
              order: 6;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.xlarge}) {
            .designer__name {
              margin-bottom: ${remCalc(22)};
            }

            .designer__profile-img {
              margin-bottom: ${remCalc(134)};
            }

            .designer__quote q {
              width: 57.670%;
            }

            .designer__description {
              width: 57.670%;
            }

            .designer__people {
              width: 31.345%;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.xxlarge}) {
            .designer__name {
              margin-bottom: ${remCalc(12)};
            }

            .designer__name h1 {
              margin: 0 0 ${remCalc(12)} 0;
            }

            .designer__profile-img {
              margin-bottom: ${remCalc(156)};
            }

            .designer__quote {
              margin-bottom: ${remCalc(32)};
            }

            .designer__quote q {
              width: 56.855%;
            }

            .designer__description {
              width: 56.855%;
            }

            .designer__people {
              width: 31.006%;
            }
          }
        `}</style>
      </React.Fragment>
    )
  }
}