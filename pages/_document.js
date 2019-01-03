import Document, { Main, NextScript } from 'next/document'
import Head from 'next/head'

class CustomDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Kidolog</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default CustomDocument
