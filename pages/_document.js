import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Lucas Panaro's personal portfolio, with contact info, and projects" />
          <meta name="keywords" content="dev, Lucas, Panaro, portfolio, contact, developer, web, projects, information" />
          <meta name="theme-color" content="#f1f3ce" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="logo_192x192.png" sizes="192x192" />
          <link rel="apple-touch-icon" sizes="180x180" href="logo_180x180.png"/>
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
