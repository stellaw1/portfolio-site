import Header from './Header';
import Footer from './Footer';

import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();

    return (
        <div className="flex flex-col min-h-screen">
            {router.pathname != '/' && <Header />}
            <main className="container m-auto w-4/5 sm:w-4/5 md:w-1/2 flex-1 py-12 pb-24">
                {children}
            </main>
            <Footer />
        </div>
    );
}
