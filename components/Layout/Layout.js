import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='container mx-auto w-1/2 flex-1 py-12 pb-24'>{children}</main>
      <Footer />
    </div>
  );
}
