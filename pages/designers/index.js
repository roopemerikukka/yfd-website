import React from 'react'
import { Link } from '../../routes'

export default class Designers extends React.Component {
  static async getInitialProps({ contentfulClient }) {
    const designers = await contentfulClient.getEntries({
      'content_type': 'designer'
    })
    return { designers }
  }

  render() {
    const { designers } = this.props
    return (
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
    )
  }
}