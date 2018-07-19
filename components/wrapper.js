import breakpoints from '../common/breakpoints'

export default ({ children }) => (
  <div className='wrapper'>
    {children}
    <style jsx>{`
      div {
        width: 85.2%;
        margin: 0 auto;
      }

      @media screen and (min-width: ${breakpoints.medium}) {
        div {
          width: 66.16%;
        }
      }

      @media screen and (min-width: ${breakpoints.large}) {
        div {
          width: 65.642%;
        }
      }

      @media screen and (min-width: ${breakpoints.xlarge}) {
        div {
          width: 82.5%;
        }
      }

      @media screen and (min-width: ${breakpoints.xxlarge}) {
        div {
          width: 100%;
          max-width: 99.375em; /* 1590px / 16 = 99.375 */
        }
      }
    `}</style>
  </div>
)