import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import '../styles/fonts.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
