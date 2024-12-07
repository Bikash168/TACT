import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title || 'TACT - Empowering the Leaders of Tomorrow'}</title>
        <meta
          name="description"
          content="Trident Academy of Creative Technology (TACT) is committed to providing quality education and empowering the leaders of tomorrow."
        />
        <meta name="keywords" content="TACT, education, AICTE, BPUT, Utkal University, Trident Academy" />
        <meta name="author" content="TACT Team" />
        <meta property="og:title" content={title || 'TACT - Empowering the Leaders of Tomorrow'} />
        <meta
          property="og:description"
          content="Trident Academy of Creative Technology (TACT) is committed to providing quality education and empowering the leaders of tomorrow."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://tact.ac.in" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
