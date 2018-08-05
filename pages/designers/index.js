import React from 'react'
import { Link } from '../../routes'
import SocialMetaFields from '../../components/socialMetaFields'

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
        <SocialMetaFields
          title={page.title}
          description={page.shareDescription}
          siteSettings={siteSettings}
          imgSrc={page.shareImage !== undefined ? page.shareImage[0].fields.file.url : undefined}
          ogType='article'
          path={path}
        />
        <div>
          <h1>Our designers</h1>
          <ul>
            {designers.items.map((designer, index) => (
              <li key={index}>
                <Link to={`/designers/${designer.fields.slug}`}>
                  <a>
                    {designer.fields.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}