import Layout from '../components/Layout';
import LocaleProvider from '../contexts/localeContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const locale = pageProps.locale || 'es';

  return (
    <LocaleProvider locale={locale}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LocaleProvider>
  )
}

export default MyApp
