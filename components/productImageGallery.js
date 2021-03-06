import React from 'react'
import { BLUE, GRAY } from '../common/colors'
import breakpoints from '../common/breakpoints'
import { triggerEvent } from '../common/gtag'

export default class extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      activeImgIndex: 0,
      loading: false
    }
  }

  onThumbnailClick( i ) {
    this.setState({
      activeImgIndex: i,
      loading: true
    })

    const { images } = this.props
    triggerEvent({
      action: 'product_gallery',
      category: images[i].fields.title,
      label: images[i].fields.file.url,
      value: 1
    })
  }

  handleImageOnLoad() {
    this.setState({
      loading: false
    })
  }

  render() {
    const { images = []} = this.props
    let { activeImgIndex, loading } = this.state

    return (
      <div className='product-image-gallery'>
        {images[activeImgIndex] &&
          <div className='product-image-gallery__stage-wrap'>
            <img
              className={`product-image-gallery__stage ${loading ? 'loading' : ''}`}
              itemProp='image'
              srcSet={`
                ${images[activeImgIndex].fields.file.url}?fm=jpg&fl=progressive&w=602&h=430&fit=fill 602w,
                ${images[activeImgIndex].fields.file.url}?fm=jpg&fl=progressive&w=1001&h=715&fit=fill 1001w,
                ${images[activeImgIndex].fields.file.url}?fm=jpg&fl=progressive&w=1281&h=915&fit=fill 1281w,
                ${images[activeImgIndex].fields.file.url}?fm=jpg&fl=progressive&w=1603&h=1145&fit=fill 1603w,
                ${images[activeImgIndex].fields.file.url}?fm=jpg&fl=progressive&w=2002&h=1430&fit=fill 2002w
              `}
              sizes='100vw'
              src={`${images[activeImgIndex].fields.file.url}?fm=jpg&fl=progressive&w=1001&h=715&fit=fill`}
              alt={images[activeImgIndex].fields.title}
              onLoad={this.handleImageOnLoad.bind( this )}
            />
          </div>
        }
        <nav>
          <ol>
            {images.map(( image, index ) => (
              <li key={index}>
                <picture key={index} onClick={this.onThumbnailClick.bind( this, index )} className={index === activeImgIndex ? 'active' : ''}>
                  <source
                    media='(min-width: 768px)'
                    srcSet={`
                      ${image.fields.file.url}?fm=jpg&fl=progressive&w=301&h=215&fit=fill 301w,
                      ${image.fields.file.url}?fm=jpg&fl=progressive&w=602&h=430&fit=fill 602w,
                      ${image.fields.file.url}?fm=jpg&fl=progressive&w=1001&h=715&fit=fill 1001w
                    `}
                    sizes='33vw'
                    alt={image.fields.title} />
                  <img src={`${image.fields.file.url}?fm=jpg&fl=progressive&w=156&h=156&fit=fill`} alt={image.fields.title} />
                </picture>
              </li>
            ))}
          </ol>
        </nav>

        <style jsx>{`
          ol {
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            padding: 0;
            margin: 1rem 0 1rem -1rem;
          }

          li {
            position: relative;
            width: 33.3333%;
            padding: 0 0 1rem 1rem;
          }

          img, picture {
            width: 100%;
            max-width: 100%;
          }

          img {
            transition: all .2s;
          }

          .product-image-gallery__stage-wrap {
            position: relative;
            height: 0;
            padding-bottom: ${500/7}%;
            background-color: ${GRAY};
          }

          .product-image-gallery__stage {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .product-image-gallery__stage.loading {
            filter: brightness(80%) grayscale(100%);
          }

          picture {
            display: block;
            user-select: none;
            cursor: pointer;
            transition: all .2s;
          }

          picture:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: calc(100% - 1rem);
            height: calc(100% - 1.0625rem);
            border: 2px solid transparent;
            transition: border .3s ease-in-out;
          }

          picture.active:before {
            border: 2px solid ${BLUE};
          }

          .product-image-gallery__stage {
            display: block;
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.medium}) {
            ol {
              margin: 1.5rem 0 1.5rem -1.5rem;
            }

            li {
              padding: 0 0 1.5rem 1.5rem;
            }

            picture:before {
              width: calc(100% - 1.5rem);
              height: calc(100% - 1.5625rem);
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.large}) {
            ol {
              margin: 2rem 0 2rem -2rem;
            }

            li {
              padding: 0 0 2rem 2rem;
            }

            picture:before {
              width: calc(100% - 2rem);
              height: calc(100% - 2.0625rem);
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.xxlarge}) {
            ol {
              margin: 3rem 0 3rem -3rem;
            }

            li {
              padding: 0 0 3rem 3rem;
            }

            picture:before {
              width: calc(100% - 3rem);
              height: calc(100% - 3.0625rem);
            }
          }
        `}</style>
      </div>
    )
  }
}