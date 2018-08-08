import React from 'react'
import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import { createClient } from '../common/contentful'
import { getTextStylesCss } from '../common/textStyles'
import { baseTextStyles, globalBoxSizing, globalPageTransitions } from '../common/baseStyles'
import Wrapper from '../components/wrapper'
import Logo from '../components/logo'
import Footer from '../components/siteFooter'
import Navigation from '../components/navigation'
import Router from 'next/router'
import { triggerPageview } from '../common/gtag'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = ( url ) => {
  NProgress.done()
  // Log a page view to analytics on every route change.
  triggerPageview( url )
}

Router.onRouteChangeError = () => NProgress.done()



const globalTextStyles = getTextStylesCss()

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // Create the contentful client shared by all pages.
    const contentfulClient = createClient()

    // Call getInitalProps of pages and pass the contentful client instance.
    let pageProps = {}
    if ( Component.getInitialProps ) {
      pageProps = await Component.getInitialProps({ ctx, contentfulClient })
    }

    // Fetch site settings that are shareds by all pages.
    const entries = await contentfulClient.getEntries({
      'content_type': 'siteSettings'
    })

    // Use the first instance of a settings page that is found.
    const siteSettings = entries.items[0].fields

    return { pageProps, siteSettings, contentfulClient, path: ctx.asPath }
  }

  render() {
    const { Component, pageProps, siteSettings, path } = this.props

    return (
      <Container>

        <Navigation
          navLinks={siteSettings.siteNavigation}
          contact={siteSettings.contact}
          path={path}
        />

        <Logo siteSettings={siteSettings} />

        <PageTransition timeout={800} classNames='page-transition'>
          <React.Fragment>
            <Wrapper>
              <Component key={this.props.router.route} {...pageProps} siteSettings={siteSettings} />
            </Wrapper>
            <Footer siteSettings={siteSettings} />
          </React.Fragment>
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
