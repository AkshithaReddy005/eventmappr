import { motion } from 'framer-motion';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Akshitha Reddy - Portfolio</title>
        <meta name="description" content="Akshitha Reddy's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
