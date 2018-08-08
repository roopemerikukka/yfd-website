import React from 'react'
import { Link } from '../routes'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <React.Fragment>
        <h2>
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : 'The page was not found!'}
        </h2>
        <p><Link to='/'><a>Go back to the homepage</a></Link></p>

        <style jsx>{`
          h2, p {
            text-align: center;
          }
        `}</style>
      </React.Fragment>
    )
  }
}