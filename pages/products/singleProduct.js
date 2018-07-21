
import React from 'react'
import breakpoints from '../../common/breakpoints'

import ProductStatus from '../../components/productStatus'
import ProductImageGallery from '../../components/productImageGallery'
import ProductAction from '../../components/productAction'
import ProductNamePrice from '../../components/productNamePrice'
import ProductWysiwyg from '../../components/productWysiwyg'
import DesignerCard from '../../components/designerCard'
import ProductRelatedItems from '../../components/productRelatedItems'

export default class extends React.Component {
  static async getInitialProps({ ctx, contentfulClient }) {
    const { slug } = ctx.query
    const product = await contentfulClient.getEntries({
      'content_type': 'product',
      'fields.slug[in]': slug
    })
    return { product: product.items[0] }
  }

  render() {
    const { product } = this.props
    return (
      <div className='product'>
        <div className='product__column-100'>
          <ProductStatus status={product.fields.status} />
          <ProductImageGallery images={product.fields.images} />
          <ProductAction />
          <ProductNamePrice name={product.fields.name} price={product.fields.price} />

          <h2>Description</h2>
          <ProductWysiwyg content={product.fields.description} />
        </div>

        <div className='product__information'>
          <h2>Product information</h2>
          <ProductWysiwyg content={product.fields.productInformation} />
        </div>

        <div className='product__designer'>
          <DesignerCard designer={product.fields.productDesigner.fields} />
        </div>

        <div className='product__column-100'>
          <h2>More products</h2>
          <ProductRelatedItems />
        </div>

        <style jsx>{`
          .product {}

          @media screen and (min-width: ${breakpoints.medium}) {
            .product {
              display: flex;
              flex-wrap: wrap;
            }

            .product__column-100 { width: 100%; }
            .product__information { width: 58.333333%; }
            .product__designer { width: 41.666667%; }
          }

          @media screen and (min-width: ${breakpoints.large}) {}

          @media screen and (min-width: ${breakpoints.xlarge}) {}

          @media screen and (min-width: ${breakpoints.xxlarge}) {}

        `}</style>
      </div>
    )
  }
}