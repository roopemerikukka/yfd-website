import React from 'react'
import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import { getTextStylesCss } from '../common/textStyles'
import Loader from '../components/loader'
import { baseTextStyles, globalBoxSizing, globalPageTransitions, PAGE_TRANSITION_TIMEOUT } from '../common/baseStyles'
import Wrapper from '../components/wrapper'
import Logo from '../components/logo'

const globalTextStyles = getTextStylesCss()

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if ( Component.getInitialProps ) {
      pageProps = await Component.getInitialProps( ctx )
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <PageTransition
          timeout={PAGE_TRANSITION_TIMEOUT}
          classNames='page-transition'
          loadingComponent={<Loader />}
          loadingDelay={500}
          loadingTimeout={{
            enter: PAGE_TRANSITION_TIMEOUT,
            exit: 0
          }}
          loadingClassNames='loading-indicator'
        >
          <Wrapper>
            <Logo />
            <Component {...pageProps} />
          </Wrapper>
        </PageTransition>

        {/* Box model */}
        <style jsx global>{globalBoxSizing}</style>

        {/* Base text styles, links etc. */}
        <style jsx global>{baseTextStyles}</style>

        {/* Text styles */}
        <style jsx global>{globalTextStyles}</style>

        {/* Page transitions */}
        <style jsx global>{globalPageTransitions}</style>
      </Container>
    )
  }
}
