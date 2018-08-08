import breakpoints from '../common/breakpoints'
import { Router } from '../routes.js'
import NProgress from 'nprogress'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ children }) => (
  <div className='wrapper'>
    {children}
    <style jsx>{`
      .wrapper {
        width: 85.2%;
        margin: 0 auto;
        min-height: 70vh;
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.medium}) {
        .wrapper {
          width: 66.16%;
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.large}) {
        .wrapper {
          width: 65.642%;
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xlarge}) {
        .wrapper {
          width: 82.5%;
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xxlarge}) {
        .wrapper {
          width: 100%;
          max-width: 99.375em; /* 1590px / 16 = 99.375 */
        }
      }
    `}</style>
  </div>
)