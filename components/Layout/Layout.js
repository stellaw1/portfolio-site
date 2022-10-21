import Header from './Header';
import Footer from './Footer';

import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <motion.main 
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
        className='container mx-auto w-1/2 flex-1 py-12 pb-24'
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
