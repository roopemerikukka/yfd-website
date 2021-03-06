import { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import classNames from 'classnames'
import breakpoints from '../common/breakpoints'
import { BEZIER_DEFAULT, BEZIER_SLOWER } from '../common/bezierFunctions'
import Observer from 'react-intersection-observer'

class Logo extends Component {
  render() {
    const { router } = this.props
    const logoClass = classNames({
      'logo': true,
      'is-page': router.route !== '/'
    })

    return (
      <Observer>
        {({ inView, ref }) => (
          <div className={`${logoClass} is-${inView ? 'visible' : 'hidden'}`} ref={ref}>
            <Link scroll={false} href='/' prefetch><a><svg className='logo__mark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 76 102.52'><path d='M59.45 8.47A36.93 36.93 0 0 0 35.74 0H0v102.52h34.61A37 37 0 0 0 60.57 92C67.72 84.84 76 73.93 76 51.54c0-18.43-6.21-34.42-16.55-43.07zm-23.71-3.2a32.54 32.54 0 0 1 20.32 7.15c.75.75 1.88 1.69 3.39 3.38L38.19 46.65 8.09 5.27zM5.46 10.91l27.27 37.62H5.46zm0 42.89H33.3L5.46 94.06zM56.81 88a31 31 0 0 1-22.2 8.84H10L39.69 53.8l1.7-2.44 21.25-30.85c4 6.2 7.9 16.17 7.9 31 0 20.35-6.96 29.95-13.73 36.49z' /></svg></a></Link>
            <svg className='logo__text' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 383.14 35.28'><path d='M0 .67h5.93q2.94 6 6 11.93L17.75.67h5.93l-9 16.09v10.5H9.13v-10.5Q4.33 8.36 0 .67zM32.26 7.69a8.76 8.76 0 0 1 7.32 3.32 10.55 10.55 0 0 1 2.19 6.76 9.66 9.66 0 0 1-3.24 7.56 9.36 9.36 0 0 1-13.25-.67 10 10 0 0 1-2.52-6.89 10.19 10.19 0 0 1 2.81-7.48 9 9 0 0 1 6.69-2.6zm0 16.13q4.08 0 4.08-6.05 0-6.3-4.08-6.3t-4.08 6.3q0 6.05 4.08 6.05zM58.68 25.08a6.94 6.94 0 0 1-5.77 2.68q-3.62 0-5.15-1.86t-1.53-6.28V8.16h5.19v10a7.68 7.68 0 0 0 .76 4 2.87 2.87 0 0 0 2.61 1.16 4.83 4.83 0 0 0 1.81-.42 2.2 2.2 0 0 0 1.21-.89V8.16h5.3v19.1h-3.93l-.46-2.18zM73.99 10.04a6.65 6.65 0 0 1 2.52-1.66 8.44 8.44 0 0 1 3.2-.69q3.61 0 5.23 2t1.62 6.39v11.18h-5.34v-11q0-4.1-3.66-4.1a5.49 5.49 0 0 0-2 .4 3.19 3.19 0 0 0-1.43.9v13.8h-5.3V8.16h4.5c.14.73.28 1.35.42 1.85zM104.19 24.95a6.06 6.06 0 0 1-5.34 2.81 7.76 7.76 0 0 1-6.52-3 10 10 0 0 1-2-6.38c0-3.67 1.06-6.5 3.2-8.49a8.25 8.25 0 0 1 5.76-2.22 7.63 7.63 0 0 1 4.5 1.3c.81.56 1.22 1 1.22 1.26l.41-2.07h4.08v17.1c0 3.22-.8 5.69-2.4 7.43a8.67 8.67 0 0 1-6.68 2.59 11.3 11.3 0 0 1-7.86-3l1.34-2.69a10.28 10.28 0 0 0 5.76 1.68q4.53-.02 4.53-6.32zm0-10.29a3.49 3.49 0 0 0-1.29-2.25 3.7 3.7 0 0 0-2.46-.94 4 4 0 0 0-3.36 1.69 7.38 7.38 0 0 0-1.26 4.53c0 4.18 1.37 6.26 4.12 6.26a4 4 0 0 0 3-1.32 4.39 4.39 0 0 0 1.26-3.13zM125.18 27.26V.67h17.41v4.41h-11.9v6.3h9.92v4.41h-9.92v11.47zM145.24 3.32a3.25 3.25 0 0 1 .94-2.33 3 3 0 0 1 2.26-1 3.25 3.25 0 0 1 2.37 1 3.16 3.16 0 0 1 1 2.35 3.19 3.19 0 0 1-.95 2.39 3.29 3.29 0 0 1-2.41.93 3.06 3.06 0 0 1-2.3-1 3.3 3.3 0 0 1-.91-2.34zm6 4.87v19.07h-5.34V8.16zM161.81 10.04a6.62 6.62 0 0 1 2.53-1.66 8.39 8.39 0 0 1 3.19-.69q3.62 0 5.24 2t1.65 6.36v11.21h-5.34v-11q-.03-4.1-3.66-4.1a5.5 5.5 0 0 0-2 .4 3.25 3.25 0 0 0-1.43.9v13.8h-5.3V8.16h4.5c.14.73.28 1.35.42 1.85zM185.03 10.04a6.65 6.65 0 0 1 2.52-1.66 8.44 8.44 0 0 1 3.2-.69q3.61 0 5.24 2t1.62 6.39v11.18h-5.35v-11q0-4.12-3.66-4.12a5.49 5.49 0 0 0-2 .4 3.25 3.25 0 0 0-1.43.9v13.82h-5.3V8.16h4.55c.14.73.28 1.35.42 1.85zM202.27 3.32a3.26 3.26 0 0 1 1-2.33 3 3 0 0 1 2.25-1 3.26 3.26 0 0 1 2.38 1 3.16 3.16 0 0 1 1 2.35 3.19 3.19 0 0 1-.95 2.39 3.31 3.31 0 0 1-2.42.93 3 3 0 0 1-2.29-1 3.27 3.27 0 0 1-.97-2.34zm6 4.87v19.07h-5.35V8.16zM224.86 12.81a8.46 8.46 0 0 0-4.71-1.34c-1.35 0-2 .57-2 1.72s.91 1.82 2.74 2.27a11.85 11.85 0 0 1 4.62 1.89 5.63 5.63 0 0 1 1.77 4.53 5.29 5.29 0 0 1-1.94 4.28 7.79 7.79 0 0 1-5.15 1.59 11.76 11.76 0 0 1-7.77-2.59l2-2.94a8.23 8.23 0 0 0 5.26 1.72 3.06 3.06 0 0 0 2-.59 1.86 1.86 0 0 0 .76-1.55c0-1.18-1-1.95-3-2.31q-6.39-1.21-6.39-6.22a5 5 0 0 1 2-4 7.49 7.49 0 0 1 4.9-1.59 10.93 10.93 0 0 1 6.94 2.31zM231.72 3.07l5.3-2.91v10.3a5.4 5.4 0 0 1 2.77-2.23 6.76 6.76 0 0 1 2.61-.58q3.66 0 5.32 2t1.7 6.4v11.21h-5.3v-11c0-2.75-1.17-4.12-3.53-4.12-1.71 0-2.89.48-3.53 1.43v13.69h-5.3zM265.49.72a32.29 32.29 0 0 1 7.28-.56q7.18 0 11 4.2a13.34 13.34 0 0 1 3.24 9.32q0 7.18-4.13 10.8-3.75 3.28-10.46 3.28a36.9 36.9 0 0 1-6.94-.54zM271 23.23a8.87 8.87 0 0 0 2.11.21q8.12 0 8.11-9.58c0-3.16-.89-5.58-2.69-7.26a7.85 7.85 0 0 0-5.55-2 9.74 9.74 0 0 0-2 .21zM309.2 19.45h-13.13a4.72 4.72 0 0 0 1.58 3.21 4.77 4.77 0 0 0 3.34 1.28 11.66 11.66 0 0 0 5.72-1.68l1.35 2.82a11 11 0 0 1-7.57 2.68 10.23 10.23 0 0 1-7.62-2.77 9.72 9.72 0 0 1-2.6-7.18 10.06 10.06 0 0 1 2.94-7.43 9 9 0 0 1 6.73-2.69 8.65 8.65 0 0 1 7.07 3.06 10.16 10.16 0 0 1 2.19 6.77zm-13.42-3.91h8.12q-.23-4.11-4-4.11t-4.12 4.11zM324.8 12.81a8.46 8.46 0 0 0-4.71-1.34c-1.35 0-2 .57-2 1.72s.91 1.82 2.73 2.27a11.84 11.84 0 0 1 4.6 1.89 5.63 5.63 0 0 1 1.77 4.53 5.29 5.29 0 0 1-1.91 4.28 7.79 7.79 0 0 1-5.15 1.59 11.72 11.72 0 0 1-7.71-2.59l1.94-2.94a8.2 8.2 0 0 0 5.25 1.72 3.07 3.07 0 0 0 2-.59 1.86 1.86 0 0 0 .76-1.55c0-1.18-1-1.95-3-2.31q-6.39-1.21-6.39-6.22a5 5 0 0 1 2-4 7.53 7.53 0 0 1 4.9-1.59 10.89 10.89 0 0 1 6.94 2.31zM330.81 3.32a3.26 3.26 0 0 1 .95-2.33 3 3 0 0 1 2.25-1 3.26 3.26 0 0 1 2.38 1 3.16 3.16 0 0 1 1 2.35 3.19 3.19 0 0 1-.97 2.37 3.31 3.31 0 0 1-2.42.93 3 3 0 0 1-2.29-1 3.31 3.31 0 0 1-.9-2.32zm6 4.87v19.07h-5.39V8.16zM354.42 24.95a6.05 6.05 0 0 1-5.34 2.81 7.76 7.76 0 0 1-6.52-3 10 10 0 0 1-2-6.38q0-5.5 3.2-8.49a8.25 8.25 0 0 1 5.76-2.22 7.59 7.59 0 0 1 4.5 1.3c.81.56 1.22 1 1.22 1.26l.42-2.06h4.08v17.1c0 3.22-.8 5.69-2.4 7.43a8.67 8.67 0 0 1-6.73 2.56 11.3 11.3 0 0 1-7.86-3l1.34-2.69a10.29 10.29 0 0 0 5.77 1.68c2.99 0 4.56-2.09 4.56-6.3zm0-10.29a3.47 3.47 0 0 0-1.28-2.25 3.74 3.74 0 0 0-2.47-.94 4 4 0 0 0-3.41 1.69 7.38 7.38 0 0 0-1.26 4.53c0 4.18 1.37 6.26 4.12 6.26a4 4 0 0 0 3-1.32 4.39 4.39 0 0 0 1.3-3.14zM370.56 10.04a6.62 6.62 0 0 1 2.53-1.66 8.39 8.39 0 0 1 3.19-.69c2.42 0 4.16.66 5.24 2s1.62 3.45 1.62 6.39v11.18h-5.34v-11q0-4.12-3.66-4.12a5.5 5.5 0 0 0-2 .4 3.25 3.25 0 0 0-1.43.9v13.82h-5.29V8.16h4.5c.14.73.28 1.35.42 1.85z' fill='#231f20' /></svg>
            <h2 className='logo__tagline'>{this.props.siteSettings.tagline}</h2>

            <style jsx>{`
              .logo {
                width: 100%;
                padding: 95px 0 56px 0;
                text-align: center;
                opacity: 0;
                transition: opacity 1.4s ${BEZIER_SLOWER};
              }

              .logo.is-visible {
                opacity: 1;
              }

              .logo a {
                display: inline-block;
              }
              
              .logo__mark {
                display: block;
                margin: 0 auto 1rem auto;
                width: 39px;
                height: 53px;
                transform: translateY(0);
                transition: transform 1.48s ${BEZIER_DEFAULT};
              }

              .logo__text {
                display: block;
                margin: 0 auto;
                max-width: 100%;
                width: 239px;
                height: 22px;
                opacity: 1;
                transform: translateY(0);
                transition: opacity 3.48s ${BEZIER_DEFAULT}, transform 1.48s ${BEZIER_DEFAULT};
              }
              
              .logo__tagline {
                font-weight: normal;
                font-size: 13px;
                text-transform: uppercase;
                line-height: 1;
                opacity: 1;
                transform: translateY(0);
                transition: opacity 3.48s ${BEZIER_DEFAULT} 0.12s, transform 1.48s ${BEZIER_DEFAULT};
              }

              .logo.is-page .logo__mark {
                transform: translateY(-20px);
                transition: transform 1.48s ${BEZIER_DEFAULT};
              }

              .logo.is-page .logo__text {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 1.48s ${BEZIER_DEFAULT} 0.12s, transform 1.48s ${BEZIER_DEFAULT} 0.12s;
              }

              .logo.is-page .logo__tagline {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 1.48s ${BEZIER_DEFAULT}, transform 1.48s ${BEZIER_DEFAULT} 0.12s;
              }
            `}</style>

            <style jsx>{`
              @media screen and (min-width: ${breakpoints.medium}) {
                .logo {
                  padding: 120px 0 72px 0; 
                }
                .logo__mark {}
                .logo__text {}
                .logo__tagline {
                  font-size: 13px;
                }
              }
            `}</style>

            <style jsx>{`
              @media screen and (min-width: ${breakpoints.large}) {
                .logo {
                  padding: 160px 0 60px 0;
                }

                .logo.is-page {
                  padding-bottom: 0;
                }

                .logo__mark {}
                .logo__text {}
              }
            `}</style>

            <style jsx>{`
              @media screen and (min-width: ${breakpoints.xlarge}) {
                .logo {
                  padding: 200px 0 100px 0;
                }

                .logo__mark {
                  width: 54px;
                  height: 75px;
                }

                .logo__text {
                  width: 394px;
                  height: 37px;
                }

                .logo__tagline {
                  font-size: 18px;
                }
              }
            `}</style>

            <style jsx>{`
              @media screen and (min-width: 90em) {
                .logo {
                  padding: 240px 0 130px 0;
                }

                .logo__mark {}
                .logo__text {}
              }
            `}</style>


            <style jsx>{`
              @media screen and (min-width: ${breakpoints.xxlarge}) {
                .logo {
                  padding: 280px 0 200px 0;
                }

                .logo.is-page {
                  padding-bottom: 140px;
                }

                .logo__mark {
                  width: 75px;
                  height: 103px;
                }

                .logo__text {
                  width: 403px;
                  height: 38px;
                }

                .logo__tagline {
                  font-size: 22px;
                }
              }
            `}</style>
          </div>
        )}
      </Observer>
    )
  }
}

export default withRouter(Logo)