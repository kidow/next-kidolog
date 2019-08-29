import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    const TITLE = 'Kidolog'
    const DESCRIPTION = "kidow's Blog"
    const IMAGE =
      'https://kidolog.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202019-08-28%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.31.05.png'
    const PUBLIC_LINK = 'https://www.kidolog.com'
    return (
      <html>
        <Head>
          <title>{TITLE}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            charSet="utf-8"
          />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="blog" />
          <meta name="author" content="kidow" />
          <meta rel="canonical" href={PUBLIC_LINK} />
          <meta name="description" content={DESCRIPTION} />
          <meta httpEquiv="Content-Type" content="text/html" />
          <meta httpEquiv="X-UA_Compatible" content="IE-edge; chrome=1" />
          <meta
            httpEquiv="cache-control"
            content="no-cache, no-store, must-revalidate"
          />
          <meta httpEquiv="pragma" content="no-cache" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content={TITLE} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={TITLE} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:site_name" content={TITLE} />
          <meta property="og:image" content={IMAGE} />
          <meta property="og:url" content={PUBLIC_LINK} />
          <meta property="og:locale" content="en_US" />
          <meta property="twitter:site" content="@kidolog" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:title" content={TITLE} />
          <meta property="twitter:description" content={DESCRIPTION} />
          <meta property="twitter:image" content={IMAGE} />
          <meta property="twitter:domain" content={PUBLIC_LINK} />
          <meta name="msapplication-TileColor" content="#e8590c" />
          <meta name="theme-color" content="#e8590c" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
          <link rel="manifest" href="/static/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
