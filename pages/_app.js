import React from 'react'
import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import { getTextStylesCss } from '../common/textStyles'
import { createClient } from '../common/contentful'
import Loader from '../components/loader'
import { baseTextStyles, globalBoxSizing, globalPageTransitions, PAGE_TRANSITION_TIMEOUT } from '../common/baseStyles'
import Wrapper from '../components/wrapper'
import Logo from '../components/logo'

const globalTextStyles = getTextStylesCss()

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const contentfulClient = createClient()
    
    let pageProps = {}

    if ( Component.getInitialProps ) {
      pageProps = await Component.getInitialProps( ctx )
    }

    // Fetch site settings that are shareds by all pages.
    const entries = await contentfulClient.getEntries({
      'content_type': 'siteSettings'
    })

    // Use the first instance of a settings page that is found.
    const siteSettings = entries.items[0].fields

    return { pageProps, siteSettings, contentfulClient }
  }

  render() {
    const { Component, pageProps, siteSettings } = this.props
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
            <Logo siteSettings={siteSettings} />
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
