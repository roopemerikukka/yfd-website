import Head from 'next/head'

export default ({ title, description, imgSrc, ogType, path, siteSettings }) => (
  <Head>
    {title &&
      <title>{title} - youngfinnishdesign.com</title>
    }
    <meta name='description' content={description ? description : siteSettings.description} />
    <meta property='og:url' content={`https//youngfinnishdesign.com${path}`} />
    <meta property='og:site_name' content='Young Finnish Design' />
    <meta property='og:locale' content='en_US' />
    <meta property='og:title' content={title} />
    <meta property='og:type' content={ogType} />
    <meta property='og:description' content={description ? description : siteSettings.description} />
    <meta property='og:image' content={imgSrc ? `${imgSrc}?fit=fill&w=1200&h=600` : `${siteSettings.shareImage.fields.file.url}?fit=fill&w=1200&h=600`} />
    <meta property='fb:app_id' content='xxx' />
  </Head>
)