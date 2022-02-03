import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#f1f3ce" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="/assets/logos/logo_192x192.png" sizes="192x192" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/logos/logo_180x180.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
