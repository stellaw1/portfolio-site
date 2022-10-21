import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import '../styles/fonts.css';
import '../styles/styles.css';

import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AnimatePresence 
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
