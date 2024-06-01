'use client';

import Footer from '../components/Footer';
import CenterBar from '../components/CenterBar';
import Header from '../components/Header';
import LinksBar from '../components/LinksBar';
import { useEffect, useState } from 'react';
import '../styles/index.css';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div></div>
      ) : (
        <main>
          <Header />
          <CenterBar />
          <LinksBar />
          <Footer />
        </main>
      )}
    </div>
  );
}
