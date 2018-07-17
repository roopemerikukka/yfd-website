import React from 'react'
import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'

import Loader from '../components/loader'
import Wrapper from '../components/wrapper'

const TIMEOUT = 400

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Wrapper>
          <PageTransition
            timeout={TIMEOUT}
            classNames='page-transition'
            loadingComponent={<Loader />}
            loadingDelay={500}
            loadingTimeout={{
              enter: TIMEOUT,
              exit: 0
            }}
            loadingClassNames='loading-indicator'
          >
            <Component {...pageProps} />
          </PageTransition>
          <style jsx global>{`
            /* Page transitions */
            .page-transition-enter {
              opacity: 0;
              transform: translate3d(0, 20px, 0);
            }

            .page-transition-enter-active {
              opacity: 1;
              transform: translate3d(0, 0, 0);
              transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
            }

            .page-transition-exit {
              opacity: 1;
            }

            .page-transition-exit-active {
              opacity: 0;
              transition: opacity ${TIMEOUT}ms;
            }

            .loading-indicator-appear,
            .loading-indicator-enter {
              opacity: 0;
            }

            .loading-indicator-appear-active,
            .loading-indicator-enter-active {
              opacity: 1;
              transition: opacity ${TIMEOUT}ms;
            }

            /* Set global box sizing to border-box */
            html {
              box-sizing: border-box;
            }

            *, *:before, *:after {
              box-sizing: inherit;
            }

            /* Base font styles */
            html,body {
              font-family: 'Muli', sans-serif;
            }
          `}</style>
        </Wrapper>
      </Container>
    )
  }
}
