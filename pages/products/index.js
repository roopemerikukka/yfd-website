import React from 'react'
import breakpoints from '../../common/breakpoints'
import PageHeading from '../../components/pageHeading'
import ProductCard from '../../components/productCard'
import SocialMetaFields from '../../components/socialMetaFields'

export default class Products extends React.Component {
  static async getInitialProps({ ctx, contentfulClient }) {
    const slug = ctx.asPath.replace(/\//gi, '')

    const products = await contentfulClient.getEntries({
      'content_type': 'product'
    })
    const page = await contentfulClient.getEntries({
      'content_type': 'page',
      'fields.slug[in]': slug
    })
    return { products, page: page.items[0].fields, path: ctx.asPath }
  }

  render() {
    const { products, page, path, siteSettings } = this.props
    return (
      <React.Fragment>
        <SocialMetaFields
          title={page.title}
          description={page.shareDescription}
          siteSettings={siteSettings}
          imgSrc={page.shareImage !== undefined ? page.shareImage[0].fields.file.url : undefined}
          ogType='article'
          path={path}
        />
        <div className='products'>
          <PageHeading heading='Our products' />
          <ul>
            {products.items.map((product, index) => (
              <li key={index}>
                <ProductCard
                  name={product.fields.name}
                  slug={product.fields.slug}
                  price={product.fields.price}
                  imageUrl={product.fields.images[0].fields.file.url}
                />
              </li>
            ))}
          </ul>
        </div>

        <style jsx>{`
          .products {
            width: 95%;
            margin: 0 auto 4rem auto;
          }

          ul {
            list-style: none;
            margin: 0 auto;
            padding: 0;
          }

          ul li {
            margin-bottom: 2.5rem;
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.medium}) {
            .products {
              width: 100%;
              margin-bottom: 6rem;
            }

            ul {
              margin: 0 -3% 2rem;
            }

            ul li {
              display: inline-block;
              width: 50%;
              padding: 0 3%;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.large}) {
            .products {
              margin-bottom: 12rem;
            }
            ul {
              width: 100%;
              margin: 0 -2%;
            }

            ul li {
              width: 33.333%;
              padding: 0 2%;
              margin-bottom: 4%;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.xlarge}) {
            .products {
              width: 82.765152%;
            }

            ul {
              margin: 0 -1.35%;
            }

            ul li {
              padding: 0 1.35%;
              margin-bottom: 2.7%;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.xxlarge}) {
            .products {
              margin-bottom: 16rem;
            }
            ul {
              margin: 0 -2.25%;
            }

            ul li {
              padding: 0 2.25%;
              margin-bottom: 4.5%;
            }
          }
        `}</style>
      </React.Fragment>
    )
  }
}