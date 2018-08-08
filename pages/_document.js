import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang='en'>
        <Head>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Muli:400,600,600i,700" rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#000000" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-config" content="/static/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}