import breakpoints from '../common/breakpoints'

export default ({ children }) => (
  <div className='wrapper'>
    {children}
    <style jsx>{`
      div {
        width: 85.2%;
        margin: 0 auto;
        min-height: 70vh;
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.medium}) {
        div {
          width: 66.16%;
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.large}) {
        div {
          width: 65.642%;
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xlarge}) {
        div {
          width: 82.5%;
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xxlarge}) {
        div {
          width: 100%;
          max-width: 99.375em; /* 1590px / 16 = 99.375 */
        }
      }
    `}</style>
  </div>
)