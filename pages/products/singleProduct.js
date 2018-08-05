import React from 'react'
import breakpoints from '../../common/breakpoints'
import { remCalc, stripMarkdown } from '../../common/helperFunctions'
import { textStyles } from '../../common/textStyles'

import ProductStatus from '../../components/productStatus'
import ProductImageGallery from '../../components/productImageGallery'
import ProductAction from '../../components/productAction'
import ProductNamePrice from '../../components/productNamePrice'
import Wysiwyg from '../../components/wysiwyg'
import DesignerCard from '../../components/designerCard'
import ProductRelatedItems from '../../components/productRelatedItems'
import SocialMetaFields from '../../components/socialMetaFields'

export default class Product extends React.Component {
  static async getInitialProps({ ctx, contentfulClient }) {
    const slug = ctx.asPath.replace(/\/products\//gi, '')
    const product = await contentfulClient.getEntries({
      'content_type': 'product',
      'fields.slug[in]': slug
    })
    return { product: product.items[0], path: ctx.asPath }
  }

  render() {
    const { product, siteSettings, path } = this.props

    return (
      <React.Fragment>
        <SocialMetaFields
          title={product.fields.name}
          description={`${stripMarkdown(product.fields.description).slice(0, 160)}...`}
          siteSettings={siteSettings}
          imgSrc={product.fields.images[0].fields.file.url}
          ogType='product'
          path={path}
        />
        <div className='product' itemScope itemType='http://schema.org/Product'>
          <div className='product__main'>

            <ProductStatus status={product.fields.status} endDate={product.fields.nextDeadline} />

            <ProductImageGallery images={product.fields.images} />

            <div className='product__action'>
              {product.fields.showButton && <ProductAction label={product.fields.buttonLabel} url={product.fields.buttonLink} />}
            </div>

            <div className='product__name-price'>
              <ProductNamePrice name={product.fields.name} price={product.fields.price} />
            </div>

            <div className='product__description' itemProp='description'>
              <h2 className={textStyles.smallSectionTitle.className}>Description</h2>
              <Wysiwyg content={product.fields.description} />
            </div>
          </div>

          <div className='product__information'>
            <h2 className={textStyles.smallSectionTitle.className}>Product information</h2>
            <Wysiwyg content={product.fields.productInformation} />
          </div>

          <div className='product__designer'>
            <DesignerCard designer={product.fields.productDesigner.fields} />
          </div>

          <div className='product__related'>
            <ProductRelatedItems />
          </div>
        </div>

        <style jsx>{`
          .product {}

          .product__action,
          .product__name-price,
          .product__description {
            margin-bottom: ${remCalc(32)};
          }

          .product__information {
            margin-bottom: ${remCalc(48)};
          }

          .product__designer {
            width: 80%;
            margin-bottom: ${remCalc(100)};
          }

          .product__related {
            width: 100%;
          }

          .product h2 {
            margin: 0 0 ${remCalc(6)} 0;
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.medium}) {
            .product {
              display: flex;
              flex-wrap: wrap;
            }

            .product__main { 
              display: flex;
              flex-direction: column;
              width: 100%;
            }

            .product__action {
              width: 58.333333%;
              margin-bottom: ${remCalc(38)};
            }

            .product__name-price,
            .product__description,
            .product__information { 
              width: 58.333333%;
            }

            .product__designer { 
              width: 41.666667%;
              text-align: center;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.large}) {
            .product__action,
            .product__name-price,
            .product__description {
              width: 52.083334%;
            }
            
            .product__information { 
              width: 52.083334%;
              margin-bottom: ${remCalc(135)};
            }
            
            .product__designer { 
              width: 47.916666%; 
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.xlarge}) {
            .product__action {
              width: 39.867424%;
              margin-bottom: ${remCalc(64)};
            }

            .product__name-price {
              width: 39.867424%;
              margin-bottom: ${remCalc(54)};
            }

            .product__description {
              width: 57.102273%;
              margin-bottom: ${remCalc(54)};
            }

            .product__information {
              width: 57.102273%;
            }

            .product__designer {
              width: 42.897727%;
              transform: translateY(-30%);
            }

            .product__related {
              width: 82.859848%;
            }
            
            .product h2 {
              margin: 0 0 ${remCalc(22)} 0;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.xxlarge}) {
            .product__action {
              margin-bottom: ${remCalc(92)};
            }

            .product__name-price,
            .product__description {
              margin-bottom: ${remCalc(64)};
            }

            .product__information {
              margin-bottom: ${remCalc(152)};
            }
          }
        `}</style>
      </React.Fragment>
    )
  }
}